# Discovery — Landing page Raven Contabilidade

Data: julho/2026 · Fase 1 (landing institucional + captação de leads)

## 1. Resumo do site atual (https://ravencontabilidade.com.br/)

- WordPress + Elementor (tema Astra), página única com lead magnet (e-book).
- Hero atual: “Contabilidade especializada para profissionais PJ no Simples
  Nacional” / “Sem burocracia, com suporte próximo, clareza nos tributos e total
  segurança”.
- Serviços listados: abertura e legalização de CNPJ, enquadramento estratégico,
  apuração de obrigações (DAS, DEFIS, PGDAS-D, IRPJ), acompanhamento mensal,
  relatórios, “regularidade fiscal garantida”.
- Públicos citados: tecnologia, designers/criativos, saúde, consultores/mentores.
- CTAs: “Fale com um Contador no WhatsApp” (4×), “Quero o Guia Gratuito”.
- Processo em 4 etapas (contato → análise → proposta → início do atendimento).

### Problemas identificados

| Área | Problema |
| --- | --- |
| Conversão | CTAs repetidos com a mesma força; formulário com mensagem obrigatória; sem mensagens contextuais no WhatsApp |
| Conteúdo | Promessa “regularidade fiscal garantida” é tecnicamente arriscada; sem seção educativa (Fator R); sem seção dedicada a troca de contador |
| Confiança | Sem depoimentos, sem seção “o que esperar”; dados legais só no rodapé |
| SEO | Página única sem headings semânticos consistentes, sem dados estruturados, meta description genérica |
| Técnica | Stack WordPress/Elementor pesada (muitos CSS/JS de plugin); sem eventos de analytics granulares |

## 2. Público principal

Prestadores de serviços que atuam (ou vão atuar) como PJ, com prioridade para
profissionais de tecnologia: desenvolvedores, engenharia de software, dados,
cloud/infra, segurança, product managers. Secundário: design, marketing,
consultoria, direito, saúde e demais prestadores de serviços.

## 3. Proposta de valor recomendada

> Contabilidade para profissionais PJ que querem clareza para trabalhar e
> crescer — a Raven cuida da abertura, impostos, notas, pró-labore e obrigações
> mensais, com atendimento direto e linguagem simples.

Pilares: especialização em PJ prestador de serviços · atendimento direto (sem
robô/fila) · linguagem simples · segurança fiscal sem promessas absolutas.

## 4. Identidade visual

### Ativos encontrados (extraídos do site atual — pasta `/brand` não existia no repositório)

- `public/brand/logo-branco.png` — logotipo horizontal branco (fundo transparente), para fundos escuros.
- `public/brand/icone.png` — símbolo (corvo em círculo, azul-marinho), usado também como favicon (`app/icon.png`).
- Paleta (variáveis globais do tema atual): navy `#02176d`, amarelo `#ffe16a`,
  texto `#222222`, texto secundário `#4B4F58`, fundo claro `#F2F5F7`.
- Tipografia do site atual: Montserrat.

### Ativos ausentes (pendências)

- Manual da marca (proporções, margens de proteção, usos proibidos).
- Logotipo em versão navy para fundos claros (só existe a versão branca).
  **Solução provisória:** header, hero, footer e 404 usam fundo escuro, onde a
  versão branca é correta. Ao receber a versão escura do logo, basta adicioná-la
  em `public/brand/` e usá-la onde houver fundo claro.
- Foto do responsável técnico, depoimentos reais, contagem de clientes.
- Imagem OG oficial (hoje é gerada dinamicamente em `app/opengraph-image.tsx`).

## 5. Decisões de UX

1. **Um CTA dominante** — “Falar com um contador” (WhatsApp) no header, hero,
   meio e fim da página; CTAs secundários (“Quero abrir meu CNPJ”, “Quero trocar
   de contador”) com peso visual menor.
2. **Seção de identificação por situação** logo após o hero: cada situação abre
   o WhatsApp com mensagem pré-preenchida específica (menos atrito que um
   formulário).
3. **Tema escuro no topo/rodapé, claro no miolo** — resolve a restrição de logo
   e cria hierarquia visual sóbria.
4. **Formulário curto no fim do funil** para quem prefere ser contatado, com
   máscara de telefone, validação amigável e confirmação com atalho para o
   WhatsApp.
5. **FAQ em `<details>` nativo** — acessível, zero JS extra, com evento de
   analytics por pergunta.
6. **Sem portal do cliente** nesta fase (nem link desabilitado), conforme escopo.

## 6. Hipóteses de conversão

- H1: mensagens de WhatsApp contextuais por situação aumentam a taxa de resposta
  qualificada vs. mensagem genérica.
- H2: a seção “Troca de contador” com processo conduzido pela Raven reduz o
  medo da transição (principal objeção de quem já tem empresa).
- H3: a seção educativa de Fator R atrai tráfego orgânico de tecnologia e
  posiciona a Raven como especialista.
- H4: exibir CRC/CNPJ/endereço em seção própria (não só rodapé) aumenta a
  confiança na ausência de depoimentos.

Métricas: eventos `whatsapp_click` (por contexto), `form_submit`, rolagem 50/90%.

## 7. Estrutura da landing page

Header fixo → Hero → Situações → Para quem é → Serviços → Como funciona →
Diferenciais → Fator R → Troca de contador → Abertura de empresa → Sobre →
Confiança (“o que esperar”) → FAQ → Contato/Formulário → CTA final → Rodapé.

## 8. Premissas adotadas

- Conteúdo institucional (CNPJ, CRC, endereço, contatos) copiado do site atual.
- Sem números fictícios: nada de “X clientes”, “Y empresas abertas”, depoimentos.
- Linguagem tributária responsável: “pode”, “depende do caso”, “análise
  individual”; nenhuma promessa de economia garantida.
- Instagram: https://www.instagram.com/ravencontabilidade (encontrado no site atual).
- Registro de leads: arquivo JSONL local + e-mail (Resend) + webhook opcionais —
  proporcional ao porte do projeto.
