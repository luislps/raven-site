# Publicação — Raven Contabilidade

## Opção recomendada: Vercel

1. Suba o projeto para um repositório Git (GitHub/GitLab).
2. Em https://vercel.com/new, importe o repositório (framework: Next.js —
   detectado automaticamente).
3. Configure as variáveis de ambiente do `.env.example` (Settings → Environment
   Variables). Mínimo recomendado para produção:
   - `NEXT_PUBLIC_SITE_URL=https://ravencontabilidade.com.br`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=5519986118324`
   - `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` **ou** `LEAD_WEBHOOK_URL`
     (na Vercel o filesystem é efêmero — sem um dos dois, o lead fica apenas
     nos logs da função).
4. Aponte o domínio `ravencontabilidade.com.br` para a Vercel (Settings →
   Domains; atualizar DNS no registrador).
5. Após o deploy: enviar sitemap no Search Console e validar OG/JSON-LD
   (ver docs/seo.md).

## Opção: VPS / Node próprio

```bash
npm ci
npm run build
npm run start   # porta 3000; use PM2/systemd + Nginx como proxy reverso
```

Neste cenário `data/leads.jsonl` persiste e serve como registro local dos leads
(está no `.gitignore`; faça backup).

## Configurar o e-mail de leads (Resend)

1. Criar conta em https://resend.com e verificar o domínio
   `ravencontabilidade.com.br` (registros DNS SPF/DKIM).
2. Criar API key e preencher `RESEND_API_KEY`.
3. `EMAIL_FROM` = remetente no domínio verificado (ex.:
   `site@ravencontabilidade.com.br`); `EMAIL_TO` = quem recebe os leads.

## Analytics

1. GA4: criar propriedade → `NEXT_PUBLIC_GA_ID` (G-XXXX). Opcionalmente via GTM
   (`NEXT_PUBLIC_GTM_ID`). Os eventos customizados chegam automaticamente.
2. Meta Pixel: `NEXT_PUBLIC_META_PIXEL_ID` (carrega só com consentimento de marketing).
3. Clarity: `NEXT_PUBLIC_CLARITY_ID` (opcional).
4. Search Console: verificação por DNS (não requer mudança no site).

## Checklist pós-deploy

- [ ] `https://dominio/` carrega com HTTPS e sem redirecionamentos quebrados
- [ ] Formulário envia e o lead chega (e-mail/webhook)
- [ ] Botões de WhatsApp abrem conversa com mensagem correta no celular
- [ ] `sitemap.xml`, `robots.txt` e `manifest.webmanifest` respondem 200
- [ ] Banner de cookies aparece na primeira visita e a escolha persiste
- [ ] Lighthouse ≥ 90 em Performance/SEO/Acessibilidade/Best Practices
