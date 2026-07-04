import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Raven Contabilidade coleta, usa e protege os dados pessoais de visitantes do site.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="julho de 2026">
      <p>
        Esta política explica, em linguagem simples, como a {site.legalName}{" "}
        ("Raven", "nós") trata os dados pessoais de quem visita o site{" "}
        {site.url} e entra em contato conosco. Ela foi escrita considerando a Lei
        Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados que você informa no formulário:</strong> nome, WhatsApp,
          e-mail, profissão ou atividade, objetivo do contato e mensagem
          (opcional).
        </li>
        <li>
          <strong>Dados de navegação (com o seu consentimento):</strong>{" "}
          informações estatísticas coletadas por cookies, como páginas visitadas,
          tempo de permanência, dispositivo e origem do acesso (por exemplo,
          parâmetros de campanha — UTM).
        </li>
      </ul>

      <h2>2. Para que usamos os dados</h2>
      <ul>
        <li>
          Responder à sua solicitação de contato e apresentar uma proposta de
          serviços contábeis (execução de procedimentos preliminares a contrato, a
          seu pedido);
        </li>
        <li>Entender como o site é usado e melhorar o conteúdo (estatística);</li>
        <li>Medir o resultado de campanhas de divulgação (marketing).</li>
      </ul>
      <p>
        Não vendemos seus dados e não os usamos para finalidades diferentes das
        descritas aqui.
      </p>

      <h2>3. Formulário de contato</h2>
      <p>
        Os dados enviados pelo formulário são usados exclusivamente para que a
        Raven retorne o seu contato. Eles podem ser registrados em nossos
        controles internos e encaminhados para o e-mail da equipe ou para a
        ferramenta que usamos para organizar atendimentos.
      </p>

      <h2>4. Cookies e ferramentas de análise</h2>
      <p>
        Usamos cookies essenciais (necessários para o site funcionar) e, somente
        com a sua autorização no banner de cookies, ferramentas de estatística e
        marketing, que podem incluir: Google Analytics, Google Tag Manager,
        Microsoft Clarity e Meta Pixel. Você pode alterar sua escolha a qualquer
        momento no link "Preferências de cookies", no rodapé do site.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Os dados podem ser tratados por fornecedores que nos prestam serviços de
        tecnologia (hospedagem do site, envio de e-mails e ferramentas de
        análise), sempre limitados ao necessário para a finalidade descrita.
        Também podemos compartilhar dados quando houver obrigação legal ou ordem
        de autoridade competente.
      </p>

      <h2>6. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os
        dados, como acesso restrito e uso de serviços com criptografia em
        trânsito. Guardamos os dados de contato pelo tempo necessário para
        atender à sua solicitação e cumprir obrigações legais.
      </p>

      <h2>7. Seus direitos</h2>
      <p>
        A LGPD garante a você, entre outros, os direitos de confirmar a
        existência de tratamento, acessar, corrigir, anonimizar ou excluir seus
        dados, e revogar consentimentos. Para exercê-los, escreva para{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        . Responderemos no menor prazo possível.
      </p>

      <h2>8. Contato do controlador</h2>
      <p>
        {site.legalName} — CNPJ {site.cnpj}
        <br />
        {site.address.full}
        <br />
        E-mail: {site.email} — Telefone/WhatsApp: {site.phoneDisplay}
      </p>

      <h2>9. Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças no site ou na
        legislação. A data da última atualização aparece no topo da página.
      </p>
    </LegalLayout>
  );
}
