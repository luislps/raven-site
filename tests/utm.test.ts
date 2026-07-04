import { beforeEach, describe, expect, it } from "vitest";
import { captureUtmParams, getStoredUtmParams } from "@/lib/utm";

describe("UTM", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("captura utm_* e gclid da query string", () => {
    const found = captureUtmParams(
      "?utm_source=google&utm_medium=cpc&utm_campaign=pj&gclid=abc123",
    );
    expect(found).toEqual({
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "pj",
      gclid: "abc123",
    });
  });

  it("persiste e recupera da sessão", () => {
    captureUtmParams("?utm_source=meta&fbclid=xyz");
    expect(getStoredUtmParams()).toEqual({ utm_source: "meta", fbclid: "xyz" });
  });

  it("ignora parâmetros não relacionados", () => {
    const found = captureUtmParams("?foo=bar&page=2");
    expect(found).toEqual({});
    expect(getStoredUtmParams()).toEqual({});
  });
});
