import { getStoredUtmParams } from "./utm";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "cta_abrir_empresa_click"
  | "cta_trocar_contador_click"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "phone_click"
  | "email_click"
  | "faq_view"
  | "scroll_50"
  | "scroll_90";

/**
 * Envia eventos para dataLayer (GTM) e gtag (GA4) quando disponíveis.
 * É seguro chamar sem consentimento: sem scripts carregados, nada é enviado.
 */
export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | undefined> = {},
): void {
  if (typeof window === "undefined") return;
  const payload = { ...getStoredUtmParams(), ...params };
  window.dataLayer?.push({ event, ...payload });
  window.gtag?.("event", event, payload);
}
