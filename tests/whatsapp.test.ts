import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

describe("buildWhatsAppUrl", () => {
  it("gera URL wa.me com o número correto", () => {
    expect(buildWhatsAppUrl()).toMatch(/^https:\/\/wa\.me\/5519986118324\?text=/);
  });

  it("usa a mensagem padrão quando não há contexto", () => {
    const url = buildWhatsAppUrl();
    expect(decodeURIComponent(url.split("text=")[1])).toBe(
      whatsappMessages.default,
    );
  });

  it("usa mensagens contextuais para abrir empresa e trocar de contador", () => {
    expect(decodeURIComponent(buildWhatsAppUrl("abrir"))).toContain(
      "abrir meu CNPJ",
    );
    expect(decodeURIComponent(buildWhatsAppUrl("trocar"))).toContain(
      "troca de contador",
    );
    expect(decodeURIComponent(buildWhatsAppUrl("fator-r"))).toContain("Fator R");
  });

  it("codifica a mensagem para URL", () => {
    const url = buildWhatsAppUrl("default");
    expect(url).not.toContain(" ");
  });
});
