import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-mist py-16 sm:py-20">
      <div className="container-content grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-navy p-6 lg:h-48 lg:w-48">
          <Image
            src="/brand/icone-branco.png"
            alt=""
            width={140}
            height={140}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <span className="section-kicker">Sobre a Raven</span>
          <h2 className="section-title max-w-2xl">
            Contabilidade que explica, não que complica
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-slate2">
            <p>
              A Raven Contabilidade nasceu para atender um perfil específico:
              profissionais que vivem de prestar serviços como pessoa jurídica.
              Nosso compromisso é que você sempre saiba o que a sua empresa paga,
              por que paga e o que precisa ser feito a cada mês.
            </p>
            <p>
              O atendimento é direto — sem intermediários entre você e quem
              entende do assunto — e a comunicação é em linguagem simples. A
              responsabilidade técnica é registrada no Conselho Regional de
              Contabilidade ({site.crc}).
            </p>
            <p>
              Estamos em Campinas/SP, e atendemos clientes em todo o
              Brasil de forma digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
