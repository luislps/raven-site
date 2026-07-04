import { WhatsAppLink } from "../WhatsAppLink";

const trustItems = [
  "Responsável técnico com CRC ativo",
  "Atendimento em todo o Brasil",
  "Suporte direto por WhatsApp",
  "Foco em prestadores de serviços",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-navy-deep pb-16 pt-28 text-white sm:pb-24 sm:pt-36"
    >
      <div className="container-content">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Contabilidade para profissionais PJ que querem{" "}
            <span className="text-accent">clareza</span> para trabalhar e crescer.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            A Raven cuida da abertura da empresa, impostos, notas fiscais,
            pró-labore, distribuição de lucros e obrigações mensais, com
            atendimento direto e linguagem simples.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink context="default" location="hero" className="btn-primary">
              Falar com um contador
            </WhatsAppLink>
            <WhatsAppLink
              context="trocar"
              location="hero"
              extraEvent="cta_trocar_contador_click"
              className="btn-secondary-dark"
            >
              Quero trocar de contador
            </WhatsAppLink>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-white/75 sm:grid-cols-2">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 fill-accent"
                  aria-hidden="true"
                >
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 6.3-6.3a1 1 0 0 1 1.4 0Z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
