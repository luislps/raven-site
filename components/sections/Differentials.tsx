const differentials = [
  {
    title: "Contato direto com quem entende",
    text: "Suas dúvidas vão para um contador, não para uma fila de atendimento ou um robô.",
  },
  {
    title: "Linguagem simples",
    text: "Você recebe explicações sobre impostos e obrigações em português claro, sem contabilês.",
  },
  {
    title: "Impostos explicados, não só calculados",
    text: "Junto com cada guia, o que ela representa e o que pode mudar no mês seguinte.",
  },
  {
    title: "Prazos organizados por quem acompanha",
    text: "A Raven controla o calendário fiscal da sua empresa e avisa quando você precisa agir.",
  },
  {
    title: "Orientação para decisões do dia a dia",
    text: "Aceitar um contrato novo, mudar o pró-labore, emitir nota diferente: você pergunta antes de decidir.",
  },
  {
    title: "Suporte por WhatsApp",
    text: "O canal do dia a dia é o mesmo que você já usa, com retorno de gente de verdade.",
  },
  {
    title: "Foco em prestadores de serviços",
    text: "Simples Nacional, Fator R, notas de serviço e contratos PJ fazem parte da rotina da Raven.",
  },
  {
    title: "Troca de contador conduzida pela Raven",
    text: "Da comunicação com o contador anterior à conferência de pendências, a transição é responsabilidade nossa.",
  },
];

export function Differentials() {
  return (
    <section id="por-que-a-raven" className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Por que a Raven</span>
        <h2 className="section-title max-w-2xl">
          O que muda quando a contabilidade conversa com você
        </h2>
        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {differentials.map((item) => (
            <li key={item.title} className="flex gap-4">
              <svg
                viewBox="0 0 20 20"
                className="mt-1 h-5 w-5 shrink-0 fill-navy"
                aria-hidden="true"
              >
                <path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6Zm4.06 6.36-4.58 4.58a.9.9 0 0 1-1.28 0L5.94 10.4a.9.9 0 1 1 1.28-1.28l1.62 1.62 3.94-3.95a.9.9 0 1 1 1.28 1.28Z" />
              </svg>
              <div>
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate2">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
