"use client";

import { faqItems } from "@/lib/faq";
import { trackEvent } from "@/lib/analytics";

export function Faq() {
  return (
    <section id="duvidas" className="bg-mist py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Dúvidas frequentes</span>
        <h2 className="section-title max-w-2xl">
          Perguntas que todo profissional PJ faz
        </h2>
        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:items-start">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-navy/10 bg-white"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  trackEvent("faq_view", { question: item.question });
                }
              }}
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 shrink-0 fill-navy transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate2">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
