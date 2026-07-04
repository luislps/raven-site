import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import { CookieConsentBanner } from "@/components/CookieConsent";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { UtmCapture } from "@/components/UtmCapture";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Raven Contabilidade | Contabilidade para profissionais PJ no Simples Nacional",
    template: "%s | Raven Contabilidade",
  },
  description:
    "Contabilidade para profissionais PJ: abertura de CNPJ, Simples Nacional, Fator R, pró-labore, notas fiscais e troca de contador, com atendimento direto e linguagem simples. Campinas/SP, atendimento em todo o Brasil.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Raven Contabilidade | Contabilidade para profissionais PJ",
    description:
      "Abertura de CNPJ, impostos, notas fiscais, pró-labore e troca de contador para prestadores de serviços, com atendimento direto e linguagem simples.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "LocalBusiness", "Organization"],
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneE164,
  taxID: site.cnpj,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  areaServed: "BR",
  sameAs: [site.instagram],
  knowsAbout: [
    "Contabilidade para PJ",
    "Simples Nacional",
    "Fator R",
    "Abertura de empresa",
    "Pró-labore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <UtmCapture />
        {children}
        <CookieConsentBanner />
        <AnalyticsScripts />
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
