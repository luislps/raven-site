import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da Raven Contabilidade.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="julho de 2026">
      <p>
        Estes termos regulam o uso do site {site.url}, mantido pela{" "}
        {site.legalName} ("Raven"). Ao navegar pelo site, você concorda com as
        condições abaixo.
      </p>

      <h2>1. Finalidade do site</h2>
      <p>
        Este site tem caráter institucional: apresenta os serviços contábeis da
        Raven e oferece canais de contato. Ele não é um canal de atendimento de
        urgência nem substitui a contratação formal de serviços.
      </p>

      <h2>2. Conteúdo informativo</h2>
      <p>
        Os textos do site — incluindo as respostas da seção de dúvidas — têm
        caráter informativo e geral. Regras tributárias mudam e cada empresa tem
        particularidades; nenhuma informação do site substitui a análise
        individual do seu caso por um profissional habilitado. Decisões tomadas
        apenas com base no conteúdo do site são de responsabilidade de quem as
        toma.
      </p>

      <h2>3. Contratação de serviços</h2>
      <p>
        O envio do formulário ou o contato pelo WhatsApp não cria vínculo
        contratual. A prestação de serviços contábeis é formalizada por proposta
        e contrato próprios, com escopo, valores e condições definidos caso a
        caso.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca Raven Contabilidade, o logotipo e o conteúdo deste site pertencem
        à {site.legalName} ou a seus licenciantes, e não podem ser reproduzidos
        para fins comerciais sem autorização.
      </p>

      <h2>5. Uso adequado</h2>
      <p>
        Você concorda em não usar o site para fins ilícitos, não tentar violar
        sua segurança e não enviar conteúdo falso, ofensivo ou de terceiros sem
        autorização pelos formulários de contato.
      </p>

      <h2>6. Links e serviços de terceiros</h2>
      <p>
        O site pode conter links para serviços de terceiros (como WhatsApp e
        Instagram). Esses serviços têm termos e políticas próprios, pelos quais a
        Raven não se responsabiliza.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais no site é descrito na{" "}
        <a href="/politica-de-privacidade" className="underline">
          Política de Privacidade
        </a>
        .
      </p>

      <h2>8. Alterações</h2>
      <p>
        Estes termos podem ser atualizados a qualquer momento. A versão vigente é
        sempre a publicada nesta página, com a data de atualização no topo.
      </p>

      <h2>9. Contato e foro</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para {site.email}. Fica
        eleito o foro da comarca de Campinas/SP para questões relacionadas a
        estes termos, salvo disposição legal em contrário.
      </p>
    </LegalLayout>
  );
}
