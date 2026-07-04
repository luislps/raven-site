import type { WhatsAppContext } from "@/lib/whatsapp";
import { WhatsAppLink } from "../WhatsAppLink";

const situations: { label: string; context: WhatsAppContext }[] = [
  { label: "Recebi uma proposta para trabalhar como PJ", context: "proposta-pj" },
  { label: "Quero abrir um CNPJ", context: "abrir" },
  { label: "Já tenho empresa, mas não entendo meus impostos", context: "impostos" },
  { label: "Quero trocar de contador", context: "trocar" },
  { label: "Presto serviços para o exterior", context: "exterior" },
  { label: "Tenho dúvidas sobre Fator R", context: "fator-r" },
  { label: "Quero organizar pró-labore e distribuição de lucros", context: "pro-labore" },
  { label: "Preciso regularizar minha empresa", context: "regularizar" },
];

export function Situations() {
  return (
    <section id="situacoes" className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Em qual momento você está?</span>
        <h2 className="section-title max-w-2xl">
          Escolha a situação mais parecida com a sua e fale direto com um contador
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {situations.map((item) => (
            <li key={item.label}>
              <WhatsAppLink
                context={item.context}
                location="situacoes"
                className="group flex min-h-14 w-full items-center justify-between gap-3 rounded-lg border border-navy/15 bg-white px-5 py-4 text-left text-base font-medium text-ink transition-colors hover:border-navy hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <span>{item.label}</span>
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 shrink-0 fill-navy/50 transition-transform group-hover:translate-x-1 group-hover:fill-navy motion-reduce:group-hover:translate-x-0"
                  aria-hidden="true"
                >
                  <path d="M7.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L11.58 10 7.3 5.7a1 1 0 0 1 0-1.4Z" />
                </svg>
              </WhatsAppLink>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate2">
          Cada opção abre o WhatsApp com uma mensagem pronta para o seu caso — é só
          enviar.
        </p>
      </div>
    </section>
  );
}
