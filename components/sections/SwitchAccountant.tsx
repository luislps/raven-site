import { WhatsAppLink } from "../WhatsAppLink";

const steps = [
  "Análise da situação atual da empresa",
  "Orientação sobre cada etapa da transição",
  "Solicitação dos documentos necessários",
  "Contato com o contador anterior",
  "Verificação de pendências e obrigações em aberto",
  "Estruturação do atendimento mensal",
];

export function SwitchAccountant() {
  return (
    <section id="trocar-de-contador" className="bg-mist py-16 sm:py-20">
      <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="section-kicker">Já tem empresa?</span>
          <h2 className="section-title">
            Trocar de contador não precisa virar outro problema.
          </h2>
          <p className="mt-4 leading-relaxed text-slate2">
            Se hoje você não recebe retorno, não entende o que paga ou descobre
            prazos depois que eles vencem, a troca de contador é mais simples do
            que parece — e quem conduz o processo é a Raven, não você.
          </p>
          <WhatsAppLink
            context="trocar"
            location="trocar-de-contador"
            extraEvent="cta_trocar_contador_click"
            className="btn-primary mt-8"
          >
            Quero trocar de contador
          </WhatsAppLink>
        </div>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-lg border border-navy/10 bg-white p-4"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
