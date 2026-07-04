import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("mostra links de navegação por âncora", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /navegação principal/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Serviços" })[0]).toHaveAttribute(
      "href",
      "#servicos",
    );
  });

  it("abre e fecha o menu mobile", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole("button", { name: /abrir menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Menu" })).toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("tem CTA principal apontando para o WhatsApp", () => {
    render(<Header />);
    const cta = screen.getAllByRole("link", { name: /falar com um contador/i })[0];
    expect(cta).toHaveAttribute("href", expect.stringContaining("wa.me"));
  });
});
