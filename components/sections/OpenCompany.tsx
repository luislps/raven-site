import { WhatsAppLink } from "../WhatsAppLink";

const items = [
  {
    title: "Definição da atividade e do CNAE",
    text: "O código errado pode aumentar seus impostos ou impedir a emissão da nota certa.",
  },
  {
    title: "Escolha do regime tributário",
    text: "Análise entre as opções disponíveis para a sua atividade e faturamento previsto.",
  },
  {
    title: "Abertura e inscrições",
    text: "CNPJ, junta comercial, prefeitura e inscrições necessárias para operar.",
  },
  {
    title: "Notas fiscais",
    text: "Credenciamento na prefeitura e orientação para emitir a primeira nota com segurança.",
  },
  {
    title: "Pró-labore e impostos",
    text: "Definição da sua remuneração e explicação de quanto e quando a empresa paga.",
  },
  {
    title: "Conta bancária e certificado digital",
    text: "Orientação sobre a conta PJ e o certificado digital, quando a atividade exigir.",
  },
];

export function OpenCompany() {
  return (
    <section id="abrir-empresa" className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Vai começar como PJ?</span>
        <h2 className="section-title max-w-2xl">
          Abertura de empresa do jeito certo desde o primeiro dia
        </h2>
        <p className="mt-4 max-w-2xl text-slate2">
          Decisões tomadas na abertura — atividade, CNAE, regime — acompanham a
          empresa por muito tempo. A Raven cuida do processo completo e explica
          cada escolha antes de fazê-la.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-navy/10 p-6">
              <h3 className="text-sm font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate2">{item.text}</p>
            </div>
          ))}
        </div>
        <WhatsAppLink
          context="abrir"
          location="abrir-empresa"
          extraEvent="cta_abrir_empresa_click"
          className="btn-primary mt-10"
        >
          Quero abrir meu CNPJ
        </WhatsAppLink>
      </div>
    </section>
  );
}
