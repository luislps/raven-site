import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeadForm } from "@/components/sections/LeadForm";

describe("LeadForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.sessionStorage.clear();
  });

  it("renderiza todos os campos obrigatórios", () => {
    render(<LeadForm />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/whatsapp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/profissão/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/objetivo/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("mostra mensagens de erro quando enviado vazio", async () => {
    const user = userEvent.setup();
    render(<LeadForm />);
    await user.click(screen.getByRole("button", { name: /enviar/i }));
    expect(await screen.findByText("Informe seu nome.")).toBeInTheDocument();
    expect(screen.getByText(/whatsapp válido/i)).toBeInTheDocument();
    expect(screen.getByText(/e-mail válido/i)).toBeInTheDocument();
    expect(screen.getByText(/autorizar o contato/i)).toBeInTheDocument();
  });

  it("aplica máscara de telefone enquanto digita", async () => {
    const user = userEvent.setup();
    render(<LeadForm />);
    const input = screen.getByLabelText(/whatsapp/i);
    await user.type(input, "19986118324");
    expect(input).toHaveValue("(19) 98611-8324");
  });

  it("envia lead válido e mostra confirmação", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const user = userEvent.setup();
    render(<LeadForm />);
    await user.type(screen.getByLabelText(/nome/i), "Maria Silva");
    await user.type(screen.getByLabelText(/whatsapp/i), "19986118324");
    await user.type(screen.getByLabelText(/e-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/profissão/i), "Desenvolvedora");
    await user.selectOptions(
      screen.getByLabelText(/objetivo/i),
      "Quero abrir uma empresa",
    );
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(screen.getByText(/recebemos seus dados/i)).toBeInTheDocument(),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/lead",
      expect.objectContaining({ method: "POST" }),
    );
    const payload = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(payload).toMatchObject({
      name: "Maria Silva",
      objective: "Quero abrir uma empresa",
      consent: true,
    });
  });

  it("mostra erro quando a API falha", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("{}", { status: 500 })),
    );
    const user = userEvent.setup();
    render(<LeadForm />);
    await user.type(screen.getByLabelText(/nome/i), "Maria Silva");
    await user.type(screen.getByLabelText(/whatsapp/i), "19986118324");
    await user.type(screen.getByLabelText(/e-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/profissão/i), "Dev");
    await user.selectOptions(
      screen.getByLabelText(/objetivo/i),
      "Quero trocar de contador",
    );
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(
      await screen.findByText(/não foi possível enviar agora/i),
    ).toBeInTheDocument();
  });
});
