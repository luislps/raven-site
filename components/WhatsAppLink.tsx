"use client";

import { buildWhatsAppUrl, type WhatsAppContext } from "@/lib/whatsapp";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  context?: WhatsAppContext;
  className?: string;
  children: React.ReactNode;
  extraEvent?: AnalyticsEvent;
  location?: string;
};

/** Link para o WhatsApp com mensagem contextual e evento de analytics. */
export function WhatsAppLink({
  context = "default",
  className,
  children,
  extraEvent,
  location,
}: Props) {
  const handleClick = () => {
    trackEvent("whatsapp_click", { context, location });
    if (extraEvent) trackEvent(extraEvent, { location });
  };

  return (
    <a
      href={buildWhatsAppUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
