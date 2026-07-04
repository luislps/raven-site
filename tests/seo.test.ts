import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import manifest from "@/app/manifest";

describe("SEO", () => {
  it("sitemap inclui home e páginas legais", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain("https://ravencontabilidade.com.br");
    expect(urls.some((url) => url.includes("politica-de-privacidade"))).toBe(true);
    expect(urls.some((url) => url.includes("termos-de-uso"))).toBe(true);
  });

  it("robots libera indexação e aponta para o sitemap", () => {
    const config = robots();
    expect(JSON.stringify(config.rules)).toContain('"allow":"/"');
    expect(config.sitemap).toContain("/sitemap.xml");
  });

  it("manifest tem nome e cores da marca", () => {
    const config = manifest();
    expect(config.name).toBe("Raven Contabilidade");
    expect(config.theme_color).toBe("#02176d");
  });
});
