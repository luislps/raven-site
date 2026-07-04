"use client";

import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";

export function Contact() {
  return (
    <section id="contato" className="bg-mist py-16 sm:py-20">
      <div className="container-content grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <span className="section-kicker">Contato</span>
          <h2 className="section-title">
            Conte sua situação e receba o retorno de um contador
          </h2>
          <p className="mt-4 leading-relaxed text-slate2">
            Preencha o formulário e a Raven entra em contato para entender seu
            caso — sem compromisso. Se preferir, fale agora pelos canais diretos:
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={buildWhatsAppUrl("default")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { context: "default", location: "contato" })
                }
                className="font-semibold text-navy underline-offset-4 hover:underline"
              >
                WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                onClick={() => trackEvent("phone_click", { location: "contato" })}
                className="font-semibold text-navy underline-offset-4 hover:underline"
              >
                Telefone: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                onClick={() => trackEvent("email_click", { location: "contato" })}
                className="break-all font-semibold text-navy underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate2">{site.address.full}</p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
