import { WhatsAppLink } from "../WhatsAppLink";

export function FatorR() {
  return (
    <section id="fator-r" className="bg-navy py-16 text-white sm:py-20">
      <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-accent">
            Fator R
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Um cálculo que pode mudar quanto imposto a sua empresa paga
          </h2>
          <p className="mt-4 leading-relaxed text-white/85">
            No Simples Nacional, algumas atividades de serviço — como as de
            tecnologia e consultoria — podem ser tributadas por tabelas diferentes.
            O Fator R é a relação entre a folha de pagamento (incluindo o
            pró-labore) e o faturamento dos últimos 12 meses, e é ele que define em
            qual tabela a empresa se enquadra.
          </p>
          <p className="mt-4 leading-relaxed text-white/85">
            Como essa relação muda mês a mês, não existe resposta única: o
            enquadramento depende dos números da sua empresa e precisa ser
            acompanhado continuamente. Um pró-labore mal dimensionado pode
            significar pagar mais imposto do que o necessário — ou criar um risco
            fiscal.
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <h3 className="text-lg font-bold">Como a Raven trata o Fator R</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
            <li>• Análise individual da sua atividade e dos seus números;</li>
            <li>• Dimensionamento do pró-labore considerando o conjunto (INSS, IRRF e Fator R);</li>
            <li>• Acompanhamento mensal do enquadramento, não um cálculo único;</li>
            <li>• Explicação do resultado em linguagem simples.</li>
          </ul>
          <WhatsAppLink
            context="fator-r"
            location="fator-r"
            className="btn-primary mt-6 w-full sm:w-auto"
          >
            Quero entender meu enquadramento
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
