"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/** Botão flutuante de WhatsApp — discreto, canto inferior direito. */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Raven pelo WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { context: "default", location: "float" })}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:hover:scale-100"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.67a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.79-5.74 12.79-12.8s-5.74-12.73-12.8-12.73Zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9.99 1.04-3.8-.25-.4a10.55 10.55 0 0 1-1.63-5.64c0-5.86 4.77-10.62 10.64-10.62a10.57 10.57 0 0 1 10.62 10.64c0 5.86-4.77 10.62-10.62 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
