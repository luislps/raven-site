import { describe, expect, it } from "vitest";
import { formatPhoneBR } from "@/lib/phone";

describe("formatPhoneBR", () => {
  it("formata celular com 11 dígitos", () => {
    expect(formatPhoneBR("19986118324")).toBe("(19) 98611-8324");
  });

  it("formata fixo com 10 dígitos", () => {
    expect(formatPhoneBR("1932323232")).toBe("(19) 3232-3232");
  });

  it("formata progressivamente enquanto digita", () => {
    expect(formatPhoneBR("1")).toBe("(1");
    expect(formatPhoneBR("199")).toBe("(19) 9");
  });

  it("descarta caracteres não numéricos e excedentes", () => {
    expect(formatPhoneBR("(19) 98611-8324999")).toBe("(19) 98611-8324");
    expect(formatPhoneBR("abc")).toBe("");
  });
});
