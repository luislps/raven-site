import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Landing page", () => {
  it("renderiza o hero com título e CTAs", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /contabilidade para profissionais pj/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /falar com um contador/i }).length,
    ).toBeGreaterThan(0);
  });

  it("contém todas as seções com âncoras de navegação", () => {
    const { container } = render(<HomePage />);
    for (const id of [
      "inicio",
      "situacoes",
      "para-quem",
      "servicos",
      "como-funciona",
      "por-que-a-raven",
      "fator-r",
      "trocar-de-contador",
      "abrir-empresa",
      "sobre",
      "confianca",
      "duvidas",
      "contato",
    ]) {
      expect(container.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });

  it("tem hierarquia de títulos com um único h1", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("h2").length).toBeGreaterThan(5);
  });

  it("links de WhatsApp usam wa.me com mensagem contextual", () => {
    render(<HomePage />);
    const abrir = screen.getAllByRole("link", { name: /quero abrir meu cnpj/i })[0];
    expect(abrir.getAttribute("href")).toContain("wa.me");
    expect(decodeURIComponent(abrir.getAttribute("href") ?? "")).toContain(
      "abrir meu CNPJ",
    );
  });

  it("exibe dados verificáveis da empresa (CNPJ e CRC)", () => {
    render(<HomePage />);
    expect(screen.getAllByText(/60\.448\.886\/0001-62/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2SP051141\/O-2/).length).toBeGreaterThan(0);
  });
});
