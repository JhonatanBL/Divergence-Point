# Divergence Point

Um espaço de aprendizagem com aulas e apresentações de **Física, Matemática e Computação**. O projeto reúne materiais interativos e organiza o conteúdo por matéria e etapa de ensino.

**Acesse o site:** [divergent-point.vercel.app](https://divergent-point.vercel.app/)

## Funcionalidades

- Exploração das aulas por matéria e por etapa de ensino.
- Busca e navegação pelos conteúdos disponíveis.
- Páginas próprias para cada aula, com opção de abrir o material em uma nova aba.
- Suporte a temas claro e escuro.

## Tecnologias

- [Next.js](https://nextjs.org/) 14
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Executar localmente

Você precisa ter o Node.js e o npm instalados.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para gerar e executar a versão de produção:

```bash
npm run build
npm run start
```

## Organização do conteúdo

- `data/lessons.ts`: catálogo de aulas, com matéria, etapa, descrição e caminho do material.
- `public/aulas/`: arquivos HTML e recursos das aulas.
- `app/`: páginas e rotas da aplicação.
- `components/`: componentes reutilizáveis da interface.

Para adicionar uma aula, inclua seus dados em `data/lessons.ts` e coloque os arquivos do material no caminho indicado em `public/aulas/`.