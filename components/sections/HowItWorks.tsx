import { WhatsAppLink } from "../WhatsAppLink";

const steps = [
  {
    title: "Você conta sua situação",
    text: "Pelo WhatsApp ou pelo formulário, você explica seu momento: proposta PJ, empresa aberta, vontade de trocar de contador.",
  },
  {
    title: "A Raven analisa seu caso",
    text: "Atividade, faturamento previsto, forma de contratação e estrutura — para entender o que faz sentido para você.",
  },
  {
    title: "Você recebe uma proposta clara",
    text: "O que está incluído, quanto custa e como funciona o atendimento. Sem letras miúdas.",
  },
  {
    title: "A Raven conduz a abertura ou a transição",
    text: "Abertura do CNPJ ou troca de contador, com a Raven cuidando dos documentos e dos órgãos envolvidos.",
  },
  {
    title: "O acompanhamento mensal começa",
    text: "Impostos calculados, obrigações em dia e um contador acessível para as dúvidas do caminho.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-mist py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Como funciona</span>
        <h2 className="section-title max-w-2xl">
          Do primeiro contato ao acompanhamento mensal
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-navy/10 bg-white p-6"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate2">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <WhatsAppLink context="default" location="como-funciona" className="btn-primary">
            Falar com um contador
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
