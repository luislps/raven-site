import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CookieConsentBanner } from "@/components/CookieConsent";
import { getConsent } from "@/lib/consent";

describe("CookieConsentBanner", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("aparece quando não há decisão registrada", () => {
    render(<CookieConsentBanner />);
    expect(screen.getByText(/cookies e privacidade/i)).toBeInTheDocument();
  });

  it("aceitar todos registra consentimento e esconde o banner", async () => {
    const user = userEvent.setup();
    render(<CookieConsentBanner />);
    await user.click(screen.getByRole("button", { name: /aceitar todos/i }));

    expect(screen.queryByText(/cookies e privacidade/i)).not.toBeInTheDocument();
    const record = getConsent();
    expect(record?.choices).toEqual({ analytics: true, marketing: true });
    expect(record?.decidedAt).toBeTruthy();
  });

  it("recusar opcionais registra consentimento negativo", async () => {
    const user = userEvent.setup();
    render(<CookieConsentBanner />);
    await user.click(screen.getByRole("button", { name: /recusar opcionais/i }));
    expect(getConsent()?.choices).toEqual({ analytics: false, marketing: false });
  });

  it("não aparece quando já existe decisão", () => {
    window.localStorage.setItem(
      "raven_consent",
      JSON.stringify({
        version: 1,
        decidedAt: new Date().toISOString(),
        choices: { analytics: true, marketing: false },
      }),
    );
    render(<CookieConsentBanner />);
    expect(screen.queryByText(/cookies e privacidade/i)).not.toBeInTheDocument();
  });
});
