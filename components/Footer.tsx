"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CookiePreferencesLink } from "./CookieConsent";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-content grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/logo-branco.png"
            alt="Raven Contabilidade"
            width={148}
            height={60}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed">
            Contabilidade para profissionais PJ e prestadores de serviços, com
            atendimento direto e linguagem simples.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Empresa
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.legalName}</li>
            <li>Nome comercial: {site.name}</li>
            <li>CNPJ: {site.cnpj}</li>
            <li>{site.crc}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                className="hover:text-white"
                onClick={() => trackEvent("phone_click", { location: "footer" })}
              >
                Telefone: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                onClick={() =>
                  trackEvent("whatsapp_click", { context: "default", location: "footer" })
                }
              >
                WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-white"
                onClick={() => trackEvent("email_click", { location: "footer" })}
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li className="pt-2 leading-relaxed">{site.address.full}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Legal
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
            <li>
              <CookiePreferencesLink className="text-left hover:text-white" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-content py-5 text-xs text-white/60">
          © {new Date().getFullYear()} {site.legalName} Todos os direitos
          reservados. Responsabilidade técnica: {site.crc}.
        </p>
      </div>
    </footer>
  );
}
