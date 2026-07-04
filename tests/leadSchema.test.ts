import { describe, expect, it } from "vitest";
import { leadSchema } from "@/lib/leadSchema";

const validLead = {
  name: "Maria Silva",
  whatsapp: "(19) 98611-8324",
  email: "maria@example.com",
  profession: "Desenvolvedora",
  objective: "Quero abrir uma empresa",
  consent: true,
};

describe("leadSchema", () => {
  it("aceita um lead válido", () => {
    expect(leadSchema.safeParse(validLead).success).toBe(true);
  });

  it("rejeita e-mail inválido", () => {
    const result = leadSchema.safeParse({ ...validLead, email: "nao-e-email" });
    expect(result.success).toBe(false);
  });

  it("rejeita WhatsApp sem DDD", () => {
    const result = leadSchema.safeParse({ ...validLead, whatsapp: "98611" });
    expect(result.success).toBe(false);
  });

  it("rejeita sem consentimento LGPD", () => {
    const result = leadSchema.safeParse({ ...validLead, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejeita objetivo fora da lista", () => {
    const result = leadSchema.safeParse({ ...validLead, objective: "Qualquer" });
    expect(result.success).toBe(false);
  });

  it("rejeita honeypot preenchido", () => {
    const result = leadSchema.safeParse({ ...validLead, website: "spam.com" });
    expect(result.success).toBe(false);
  });
});
