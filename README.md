# Grupo Despertar — Site (MVP / Apresentação)

Landing page estática, visual completo, feita para apresentar aos sócios do Grupo Despertar
uma proposta de site premium. HTML + CSS + JS puro, sem build step e sem backend.

## Rodar localmente

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080/index.html`.

## Deploy no Render (Static Site)

Já publicado em: **https://site-despertar.onrender.com**

1. New → Static Site → conectar este repositório.
2. Build Command: deixar em branco.
3. Publish Directory: `.`
4. Deploy.

As tags `og:image` / `twitter:image` / `canonical` em `index.html` já apontam para essa URL.
Se o link do Render mudar (novo serviço, domínio próprio etc.), atualize essas tags de acordo.

## O que é indicativo (não funcional de propósito)

Este é um MVP visual para aprovação — os itens abaixo estão presentes na interface mas não
têm back-end real por trás, como combinado:

- Formulário de contato (mostra confirmação em tela, não envia e-mail de verdade)
- Cards de "Notícias" (conteúdo placeholder)
- Depoimentos (texto ilustrativo, atribuído de forma genérica — não são citações reais)

O link do WhatsApp e o link de telefone/e-mail **são reais** e funcionam.

## Estrutura

```
index.html
assets/
  css/style.css
  js/main.js
  img/
    logo.png          — logo oficial (fundo transparente)
    favicon.png        — recorte quadrado do ícone (favicon + og:image)
    vania_clean.jpg     — foto da fundadora, tratada
    diretoria_clean.jpg — foto da diretoria, tratada
    cauezinho.png       — mascote oficial (Instagram), usado na seção Projeto Cauê
    source/             — imagens originais (não versionadas, ver .gitignore)
```

## Conteúdo que precisa de revisão da clínica antes de ir para produção final

- Texto da nova frente de TDAH é posicionamento inicial — ajustar com a equipe clínica.
- Projeto Cauê: mecânica descrita (triagem, bolsas, acompanhamento) é uma proposta de
  comunicação, não um regulamento formal — validar com a diretoria antes de publicar.
