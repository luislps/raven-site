import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { leadSchema } from "@/lib/leadSchema";

export const runtime = "nodejs";

// Rate limit simples em memória (por instância). Suficiente para conter abuso
// básico em um site institucional; para tráfego pago intenso, considerar um
// serviço dedicado (Upstash, Cloudflare Turnstile etc.).
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_TIME_MS = 3000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

async function persistToFile(lead: Record<string, unknown>): Promise<void> {
  // Registro local em JSONL. Em hospedagens serverless (Vercel etc.) o
  // sistema de arquivos é efêmero — use e-mail/webhook como registro principal.
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      JSON.stringify(lead) + "\n",
      "utf8",
    );
  } catch (error) {
    console.warn("[lead] não foi possível gravar em data/leads.jsonl:", error);
  }
}

async function notifyByEmail(lead: Record<string, unknown>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EMAIL_TO;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !to || !from) return;

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const lines = Object.entries(lead)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");
  await resend.emails.send({
    from,
    to,
    subject: `Novo lead do site: ${String(lead.name)} — ${String(lead.objective)}`,
    text: `Novo lead recebido pelo site da Raven Contabilidade:\n\n${lines}`,
  });
}

async function forwardToWebhook(lead: Record<string, unknown>): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { website, startedAt, ...data } = parsed.data;

  // Anti-spam: honeypot preenchido ou envio rápido demais → responde ok sem processar
  const tooFast =
    typeof startedAt === "number" && Date.now() - startedAt < MIN_FILL_TIME_MS;
  if (website || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    ...data,
    receivedAt: new Date().toISOString(),
    source: "landing-page",
  };

  const results = await Promise.allSettled([
    persistToFile(lead),
    notifyByEmail(lead),
    forwardToWebhook(lead),
  ]);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[lead] falha em um dos destinos:", result.reason);
    }
  }

  console.info(`[lead] recebido: ${data.name} <${data.email}> — ${data.objective}`);
  return NextResponse.json({ ok: true });
}
