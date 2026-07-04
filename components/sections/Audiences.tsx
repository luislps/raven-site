const techAudiences = [
  "Desenvolvedores e engenheiros de software",
  "Profissionais de dados",
  "Cloud e infraestrutura",
  "Segurança da informação",
  "Product managers",
];

const otherAudiences = [
  "Designers",
  "Marketing",
  "Consultores",
  "Advogados",
  "Profissionais da saúde",
  "Outros prestadores de serviços",
];

export function Audiences() {
  return (
    <section id="para-quem" className="bg-mist py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Para quem é</span>
        <h2 className="section-title max-w-2xl">
          Feita para quem vive de prestar serviços como PJ
        </h2>
        <p className="mt-4 max-w-2xl text-slate2">
          A rotina fiscal de um prestador de serviços é diferente da de um comércio
          ou indústria. A Raven trabalha todos os dias com esse perfil — em
          especial com profissionais de tecnologia — e conhece as dúvidas típicas
          de quem emite nota por serviço prestado.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-navy p-6 text-white sm:p-8">
            <h3 className="text-lg font-bold">Tecnologia</h3>
            <p className="mt-2 text-sm text-white/80">
              O público que a Raven mais atende: contratos PJ, remoto para fora do
              país, Fator R e enquadramento de atividades de TI.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {techAudiences.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-navy/10 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-navy">
              E todos os outros prestadores de serviços
            </h3>
            <p className="mt-2 text-sm text-slate2">
              O mesmo cuidado para quem presta serviços em outras áreas, sempre
              considerando as regras da profissão.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {otherAudiences.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
