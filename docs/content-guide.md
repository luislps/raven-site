# Guia de conteúdo — Raven Contabilidade

## Tom de voz

Direto, claro, humano e profissional. Fala com o leitor (“você”), explica o
porquê das coisas e evita contabilês. Frases curtas, um assunto por parágrafo.

**Evitar sempre:**

- Promessas absolutas: “menor imposto garantido”, “economia garantida”,
  “zero risco”, “regularidade garantida”.
- Frases vazias: “revolucione sua contabilidade”, “leve seu negócio para o
  próximo nível”, “soluções personalizadas e inovadoras”, “apaixonados por
  números”.
- Dados fictícios: anos de experiência, número de clientes, depoimentos
  inventados, selos ou avaliações que não existem.

**Preferir:** “depende do seu caso”, “a análise é individual”, “a Raven explica
o que precisa ser feito e por quê”.

## Onde editar cada conteúdo

| Conteúdo | Arquivo |
| --- | --- |
| Dados da empresa (CNPJ, CRC, endereço, contatos) | `lib/site.ts` |
| Mensagens de WhatsApp por contexto | `lib/whatsapp.ts` |
| Perguntas e respostas do FAQ (site + JSON-LD) | `lib/faq.ts` |
| Textos das seções | `components/sections/*.tsx` |
| Opções do campo “objetivo” do formulário | `lib/leadSchema.ts` |
| Políticas legais | `app/politica-de-privacidade/page.tsx`, `app/termos-de-uso/page.tsx` |
| Title/description | `app/layout.tsx` |

## Depoimentos (quando existirem)

A seção de confiança (`components/sections/Trust.tsx`) hoje mostra “O que você
pode esperar do atendimento”, porque não há depoimentos reais. Quando houver:

1. Colher autorização por escrito do cliente (nome + profissão + texto).
2. Adicionar um array `testimonials` na própria seção com nome, profissão e
   citação curta (2–3 frases, concretas).
3. Manter os cards de expectativa ou substituí-los — nunca publicar depoimento
   sem autorização ou inventado.

## Revisão periódica

- Revisar valores/regras tributárias citadas a cada mudança de legislação
  (Simples Nacional, Fator R) — os textos foram escritos para envelhecer bem,
  sem alíquotas específicas.
- Atualizar a data de “última atualização” das páginas legais quando editá-las.
