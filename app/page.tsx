import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollTracker } from "@/components/ScrollTracker";
import { Hero } from "@/components/sections/Hero";
import { Situations } from "@/components/sections/Situations";
import { Audiences } from "@/components/sections/Audiences";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Differentials } from "@/components/sections/Differentials";
import { FatorR } from "@/components/sections/FatorR";
import { SwitchAccountant } from "@/components/sections/SwitchAccountant";
import { OpenCompany } from "@/components/sections/OpenCompany";
import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqItems } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Situations />
        <Audiences />
        <Services />
        <HowItWorks />
        <Differentials />
        <FatorR />
        <SwitchAccountant />
        <OpenCompany />
        <About />
        <Trust />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollTracker />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
