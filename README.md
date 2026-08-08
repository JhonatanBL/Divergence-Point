# Divergence Point — Hub de Aulas

Site em Next.js (App Router + TypeScript + Tailwind) para hospedar e listar
suas aulas de Física, Matemática e Computação feitas em Quarto/Reveal.js.

## Como funciona

Cada aula exportada do Quarto (`quarto render aula.qmd --to revealjs`) vira
uma pasta de HTML estático. Essa pasta é colocada dentro de
`public/aulas/<slug>/` e o site a exibe num iframe em tela cheia, dentro de
uma página com um cabeçalho leve (voltar / abrir em nova aba). A home lista
todas as aulas cadastradas em `data/lessons.ts`.

A home tem três camadas de organização:
- **Busca**: campo de texto no topo, filtra por título, assunto e descrição
  (ignora acento e caixa).
- **Etapa** (`stage`): seletor de duas opções — Ensino Médio / Graduação —
  ao lado das abas.
- **Matéria** (`subject`): quatro abas — **Todas**, Física, Matemática,
  Computação. Em "Todas" as aulas aparecem agrupadas por matéria; nas
  outras, agrupadas por assunto.
- **Assunto** (`topic`): dentro de cada aba de matéria específica, as aulas
  da etapa/busca atuais são agrupadas por assunto (ex.: "Gravitação",
  "Álgebra Linear Numérica", "Deep Learning"), cada grupo com seu próprio
  separador.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Como adicionar uma nova aula

1. Exporte o `.qmd` para Reveal.js:

   ```bash
   quarto render minha-aula.qmd --to revealjs
   ```

   Isso gera uma pasta (geralmente `minha-aula_files/`) e um `minha-aula.html`.

2. Crie uma pasta dentro de `public/aulas/` com um nome curto (o "slug"),
   por exemplo `public/aulas/leis-de-newton/`, e coloque **dentro dela**:
   - o HTML exportado, renomeado para `index.html`
   - a pasta de assets gerada junto (imagens, JS, CSS do Reveal.js)

   Estrutura final esperada:

   ```
   public/aulas/leis-de-newton/
     index.html
     leis-de-newton_files/...   (ou o nome que o Quarto gerar)
   ```

3. Abra `data/lessons.ts` e adicione um novo item ao array `lessons`:

   ```ts
   {
     slug: "leis-de-newton",
     title: "Leis de Newton",
     subject: "Física",         // "Física" | "Matemática" | "Computação"
     stage: "Ensino Médio",      // "Ensino Médio" | "Graduação"
     topic: "Mecânica",           // vira o separador dentro da aba
     description: "As três leis de Newton com exemplos do cotidiano.",
     level: "Médio",
     date: "2026-08-10",
     folder: "leis-de-newton",
   },
   ```

   - `slug` define a URL: `/aulas/leis-de-newton`
   - `subject` decide em qual aba a aula aparece
   - `stage` decide se ela aparece em "Ensino Médio" ou "Graduação"
   - `topic` decide sob qual separador ela cai dentro da aba (assuntos
     repetidos entre aulas diferentes são agrupados automaticamente)
   - `folder` deve bater com o nome da pasta em `public/aulas/`
   - dentro de cada assunto, as aulas são ordenadas pela `date` (mais
     recente primeiro)

4. Rode `npm run dev` (ou `npm run build`) para conferir e depois faça commit/push.

Se a aula ainda não estiver pronta mas você já quer reservar o espaço no
hub, adicione `comingSoon: true` no item — ela aparece esmaecida, sem link,
com a tag "em breve".

> Dica: se suas aulas já são em Reveal.js "puro" (HTML feito à mão, sem
> Quarto), o processo é o mesmo — só copiar a pasta com o `index.html` e os
> assets para dentro de `public/aulas/<slug>/`.

## Hospedar (deploy)

Recomendado: **Vercel** (feito pela mesma empresa do Next.js, plano grátis
é suficiente para esse projeto).

1. Suba o projeto para um repositório no GitHub:

   ```bash
   git init
   git add .
   git commit -m "hub de aulas de física"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/aulas-fisica-hub.git
   git push -u origin main
   ```

2. Vá em https://vercel.com, faça login com sua conta GitHub, clique em
   **Add New → Project**, selecione o repositório e clique em **Deploy**.
   O Vercel detecta automaticamente que é Next.js — não precisa configurar
   nada.

3. Toda vez que você der `git push` com uma aula nova, o Vercel refaz o
   deploy sozinho em ~1 minuto. Você também pode editar `data/lessons.ts`
   e as pastas em `public/aulas/` direto pela interface do GitHub se
   preferir não usar o terminal.

4. (Opcional) Em **Settings → Domains** no painel do projeto na Vercel dá
   pra ligar um domínio próprio, se você tiver um.

### Alternativas ao Vercel
- **Netlify**: mesmo fluxo (conectar repo, build automático), funciona bem
  com Next.js.
- **GitHub Pages**: só funciona se você exportar o site como estático
  (`output: "export"` no `next.config.js`); como as aulas já são HTML
  estático dentro de `public/`, isso é possível, mas você perde recursos
  como metadata dinâmica por rota — não é necessário para este projeto,
  então fique com Vercel/Netlify a menos que já tenha GitHub Pages em uso.

## Estrutura do projeto

```
app/
  layout.tsx           layout raiz (fontes, metadata)
  page.tsx              home: hero + grade de aulas
  aulas/[slug]/page.tsx  página que exibe a aula em iframe
  not-found.tsx          404 customizado
components/
  Header.tsx, Footer.tsx, LessonCard.tsx, ChalkDoodles.tsx
data/
  lessons.ts             <- editar aqui para cadastrar aulas
public/aulas/
  <slug>/index.html       <- exports do Quarto/Reveal.js entram aqui
```

## Identidade visual

Paleta baseada na logo **Divergence Point**: fundo escuro tipo tinta/espaço
no tema escuro (padrão) e um tom papel/cream no tema claro, com três
acentos que reaproveitam as cores da própria logo — azul (Física), laranja
(Computação) e prata/aço (Matemática). Título em Space Grotesk, corpo em
Manrope, rótulos em JetBrains Mono. As formas no hero (parábola, órbita,
pêndulo, vetor) usam essas mesmas três cores e se adaptam automaticamente
ao tema ativo.

Todas as cores vivem em variáveis CSS (`app/globals.css`, blocos `:root` e
`.dark`), então para ajustar um tom (ex.: deixar o azul mais escuro) basta
editar o valor RGB da variável correspondente — não é preciso mexer nos
componentes.

## Tema claro/escuro

O botão de sol/lua no cabeçalho alterna entre os temas usando a biblioteca
`next-themes`, que salva a preferência no navegador (`localStorage`) e
aplica o tema certo antes da primeira renderização, sem "flash" de tema
errado. O padrão inicial é o tema escuro. Para mudar o padrão, edite
`defaultTheme` em `app/layout.tsx`.
# Divergent-Point
