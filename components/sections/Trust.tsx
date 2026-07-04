import { site } from "@/lib/site";

const expectations = [
  {
    title: "Clareza",
    text: "Você entende o que paga e por quê — cada guia vem com explicação, não só com o boleto.",
  },
  {
    title: "Organização",
    text: "Prazos e obrigações controlados pela Raven, com avisos quando você precisa agir.",
  },
  {
    title: "Retorno",
    text: "Mensagens respondidas por gente que conhece a sua empresa, em prazo razoável e combinado.",
  },
  {
    title: "Acompanhamento",
    text: "Seu enquadramento e seus números revisados ao longo do ano, não apenas na abertura.",
  },
  {
    title: "Orientação",
    text: "Antes de decisões importantes — contrato novo, mudança de atividade — você tem com quem conferir.",
  },
];

/**
 * Seção de confiança com dados verificáveis.
 * Quando houver depoimentos reais de clientes, eles podem substituir ou
 * complementar os cards de expectativa (ver docs/content-guide.md).
 */
export function Trust() {
  return (
    <section id="confianca" className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Confiança</span>
        <h2 className="section-title max-w-2xl">
          O que você pode esperar do atendimento
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {expectations.map((item) => (
            <li key={item.title} className="rounded-xl bg-mist p-6">
              <h3 className="text-sm font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate2">{item.text}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid gap-6 rounded-xl border border-navy/10 p-6 text-sm sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          <div>
            <dt className="font-bold text-navy">Razão social</dt>
            <dd className="mt-1 text-slate2">{site.legalName}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">CNPJ</dt>
            <dd className="mt-1 text-slate2">{site.cnpj}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">Registro profissional</dt>
            <dd className="mt-1 text-slate2">{site.crc}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">Endereço</dt>
            <dd className="mt-1 text-slate2">{site.address.full}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
