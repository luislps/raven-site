import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

test.describe("Fluxo principal de conversão", () => {
  test("visitante abre a página, escolhe abrir CNPJ, envia o formulário e o lead é registrado", async ({
    page,
  }) => {
    await page.goto("/");

    // Página carrega com hero e navegação
    await expect(
      page.getByRole("heading", { level: 1, name: /contabilidade para profissionais pj/i }),
    ).toBeVisible();

    // CTA "Quero abrir meu CNPJ" existe e aponta para WhatsApp com mensagem contextual
    const abrirCta = page
      .getByRole("link", { name: /quero abrir meu cnpj/i })
      .first();
    await expect(abrirCta).toHaveAttribute("href", /wa\.me\/5519986118324/);

    // Visitante decide enviar o formulário
    await page.getByRole("link", { name: "Contato" }).first().click();
    await expect(page.locator("#contato")).toBeInViewport();

    const email = `e2e-${Date.now()}@example.com`;
    const contact = page.locator("#contato");
    await contact.getByLabel(/nome/i).fill("Teste E2E");
    await contact.getByLabel(/whatsapp/i).fill("19986118324");
    await contact.getByLabel(/e-mail/i).fill(email);
    await contact.getByLabel(/profissão/i).fill("Desenvolvedor");
    await contact.getByLabel(/objetivo/i).selectOption("Quero abrir uma empresa");
    await contact.getByRole("checkbox").check();

    // Proteção anti-spam exige tempo mínimo de preenchimento
    await page.waitForTimeout(3500);
    await page.getByRole("button", { name: /enviar/i }).click();

    // Confirmação visual
    await expect(page.getByText(/recebemos seus dados/i)).toBeVisible();

    // Lead registrado no armazenamento local (data/leads.jsonl)
    const leadsFile = path.join(process.cwd(), "data", "leads.jsonl");
    const content = await readFile(leadsFile, "utf8");
    expect(content).toContain(email);
    expect(content).toContain("Quero abrir uma empresa");
  });

  test("banner de cookies aparece e registra a escolha", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/cookies e privacidade/i)).toBeVisible();
    await page.getByRole("button", { name: /aceitar todos/i }).click();
    await expect(page.getByText(/cookies e privacidade/i)).toBeHidden();

    const consent = await page.evaluate(() =>
      window.localStorage.getItem("raven_consent"),
    );
    expect(consent).toContain('"analytics":true');
  });

  test("menu mobile funciona em viewport pequeno", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: /abrir menu/i }).click();
    await expect(page.getByRole("navigation", { name: "Menu" })).toBeVisible();
    await page
      .getByRole("navigation", { name: "Menu" })
      .getByRole("link", { name: "Serviços" })
      .click();
    await expect(page.locator("#servicos")).toBeInViewport();
  });
});
