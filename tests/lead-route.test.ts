import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/lead/route";

let ipCounter = 0;

function makeRequest(body: unknown): Request {
  ipCounter += 1;
  return new Request("http://localhost/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": `10.0.0.${ipCounter}`,
    },
    body: JSON.stringify(body),
  });
}

const validLead = {
  name: "João Souza",
  whatsapp: "(11) 91234-5678",
  email: "joao@example.com",
  profession: "Consultor",
  objective: "Quero trocar de contador",
  consent: true,
  startedAt: Date.now() - 10_000,
};

describe("POST /api/lead", () => {
  it("aceita lead válido", async () => {
    const response = await POST(makeRequest(validLead));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ ok: true });
  });

  it("rejeita payload inválido com 400", async () => {
    const response = await POST(makeRequest({ name: "X" }));
    expect(response.status).toBe(400);
  });

  it("rejeita JSON malformado com 400", async () => {
    ipCounter += 1;
    const response = await POST(
      new Request("http://localhost/api/lead", {
        method: "POST",
        headers: { "x-forwarded-for": `10.1.0.${ipCounter}` },
        body: "{nope",
      }),
    );
    expect(response.status).toBe(400);
  });

  it("responde ok sem processar quando o envio é rápido demais (anti-spam)", async () => {
    const response = await POST(
      makeRequest({ ...validLead, startedAt: Date.now() }),
    );
    expect(response.status).toBe(200);
  });

  it("aplica rate limit por IP", async () => {
    const fixedIpRequest = () =>
      new Request("http://localhost/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": "99.99.99.99",
        },
        body: JSON.stringify(validLead),
      });
    let lastStatus = 200;
    for (let i = 0; i < 7; i++) {
      const response = await POST(fixedIpRequest());
      lastStatus = response.status;
    }
    expect(lastStatus).toBe(429);
  });
});
