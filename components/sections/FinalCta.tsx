import { WhatsAppLink } from "../WhatsAppLink";

export function FinalCta() {
  return (
    <section className="bg-navy-deep py-16 text-white sm:py-20">
      <div className="container-content text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          Sua contabilidade deve facilitar sua rotina, não criar mais dúvidas.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Converse com a Raven e entenda qual estrutura faz sentido para sua
          atividade.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppLink context="default" location="cta-final" className="btn-primary">
            Falar com um contador
          </WhatsAppLink>
          <a href="#contato" className="btn-secondary-dark">
            Enviar meus dados
          </a>
        </div>
      </div>
    </section>
  );
}
