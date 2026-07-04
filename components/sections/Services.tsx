import type { WhatsAppContext } from "@/lib/whatsapp";
import { WhatsAppLink } from "../WhatsAppLink";

type Service = {
  title: string;
  problem: string;
  help: string;
  cta: string;
  context: WhatsAppContext;
};

const services: Service[] = [
  {
    title: "Abertura de empresa",
    problem: "Você vai começar como PJ e não sabe por onde começar.",
    help: "A Raven define atividade, CNAE e regime, abre o CNPJ e deixa tudo pronto para você emitir a primeira nota.",
    cta: "Quero abrir meu CNPJ",
    context: "abrir",
  },
  {
    title: "Impostos e Simples Nacional",
    problem: "Você paga as guias sem saber o que está pagando e por quê.",
    help: "Cálculo mensal dos impostos, análise do enquadramento e explicação clara do que compõe cada guia.",
    cta: "Quero entender meus impostos",
    context: "impostos",
  },
  {
    title: "Notas fiscais",
    problem: "Dúvidas sobre como, quando e com quais códigos emitir nota.",
    help: "Orientação prática de emissão — inclusive para clientes de outros municípios e do exterior.",
    cta: "Falar com um contador",
    context: "default",
  },
  {
    title: "Pró-labore e folha",
    problem: "Você não sabe quanto se pagar nem como registrar isso.",
    help: "Definição e processamento do pró-labore, INSS e IRRF, e folha de pagamento quando há funcionários.",
    cta: "Organizar meu pró-labore",
    context: "pro-labore",
  },
  {
    title: "Distribuição de lucros",
    problem: "Retirar dinheiro da empresa sem critério pode gerar problema fiscal.",
    help: "Organização da distribuição de lucros com a documentação contábil que dá suporte a ela.",
    cta: "Falar com um contador",
    context: "pro-labore",
  },
  {
    title: "Obrigações mensais",
    problem: "Declarações e prazos que você nem sabia que existiam.",
    help: "A Raven acompanha o calendário da sua empresa e cuida das entregas mensais e anuais.",
    cta: "Falar com um contador",
    context: "default",
  },
  {
    title: "Troca de contador",
    problem: "Atendimento distante, respostas vagas ou entregas atrasadas.",
    help: "A Raven analisa sua situação e conduz a transição com o contador anterior, sem retrabalho para você.",
    cta: "Quero trocar de contador",
    context: "trocar",
  },
  {
    title: "Serviços para o exterior",
    problem: "Receber de fora do país envolve câmbio, notas e tributação específicos.",
    help: "Orientação sobre emissão de notas, contratos de câmbio e o tratamento fiscal dessas receitas.",
    cta: "Presto serviços para fora",
    context: "exterior",
  },
  {
    title: "Regularização e consultoria",
    problem: "Pendências, guias atrasadas ou decisões que você não sabe como tomar.",
    help: "Diagnóstico da situação, plano de regularização e suporte consultivo para as decisões do dia a dia.",
    cta: "Regularizar minha empresa",
    context: "regularizar",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <span className="section-kicker">Serviços</span>
        <h2 className="section-title max-w-2xl">
          O que a Raven resolve para a sua empresa
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-bold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm font-medium text-ink">{service.problem}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate2">
                {service.help}
              </p>
              <WhatsAppLink
                context={service.context}
                location={`servico:${service.title}`}
                className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-navy underline-offset-4 hover:underline"
              >
                {service.cta}
                <span aria-hidden="true">→</span>
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
