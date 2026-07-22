# Grupo Despertar — Site (MVP / Apresentação)

Landing page estática, visual completo, feita para apresentar aos sócios do Grupo Despertar
uma proposta de site premium. HTML + CSS + JS puro, sem build step e sem backend.

## Rodar localmente

```bash
python3 -m http.server 8765
```

Depois abra `http://localhost:8765/`.

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

- Formulário de contato (encaminha a mensagem preenchida para o WhatsApp)
- Cards de "Notícias" (conteúdo placeholder)

O link do WhatsApp e o link de telefone/e-mail **são reais** e funcionam.

## Estrutura

```
index.html
assets/
  css/style.css
  js/main.js
  img/
    logo.png          — logo oficial (fundo transparente)
    favicon.png        — recorte quadrado do ícone usado como favicon
    og-despertar.png   — arte de compartilhamento para WhatsApp e redes sociais
    vania_original.png      — imagem original da fundadora
    diretoria_original.png  — imagem original da diretoria
    cauezinho_original.png  — ilustração original usada no Projeto Cauê
    fachada.jpeg            — fotografia pública da unidade infantil
```

## Conteúdo que precisa de revisão da clínica antes de ir para produção final

- Texto da nova frente de TDAH é posicionamento inicial — ajustar com a equipe clínica.
- Projeto Cauê: a descrição de acesso e participação é uma proposta de comunicação,
  não um regulamento formal — validar com a diretoria antes de publicar.
