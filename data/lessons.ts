/** as três abas de matéria, nessa ordem fixa */
export const SUBJECTS = ["Física", "Matemática", "Computação"] as const;
export type Subject = (typeof SUBJECTS)[number];

/** valor da aba "todas as aulas", que soma as três matérias */
export const ALL_TAB = "Todas" as const;
export type TabValue = Subject | typeof ALL_TAB;
/** abas na ordem exibida, com "Todas" primeiro */
export const TABS: TabValue[] = [ALL_TAB, ...SUBJECTS];

/** o seletor de etapa de ensino, dentro de cada aba de matéria */
export const STAGES = ["Ensino Médio", "Graduação"] as const;
export type Stage = (typeof STAGES)[number];

/** classes Tailwind (literais, para o JIT reconhecer) de cada matéria,
 * na paleta da logo Divergence Point: física=azul, computação=laranja,
 * matemática=prata; "Todas" usa o tom neutro de texto */
export const TAB_STYLE: Record<
  TabValue,
  { text: string; dot: string; border: string }
> = {
  Todas: {
    text: "text-accent-green",
    dot: "bg-accent-green",
    border: "border-accent-green",
  },
  Física: {
    text: "text-accent-blue",
    dot: "bg-accent-blue",
    border: "border-accent-blue",
  },
  Matemática: {
    text: "text-accent-silver",
    dot: "bg-accent-silver",
    border: "border-accent-silver",
  },
  Computação: {
    text: "text-accent-orange",
    dot: "bg-accent-orange",
    border: "border-accent-orange",
  },
};

export type Lesson = {
  /** identificador único usado na URL: /aulas/<slug> */
  slug: string;
  /** título exibido no card e no topo da página da aula */
  title: string;
  /** matéria: aba onde a aula aparece */
  subject: Subject;
  /** etapa de ensino: controla o seletor "Ensino Médio" / "Graduação" */
  stage: Stage;
  /** assunto dentro da matéria, ex: "Gravitação", "Álgebra Linear" — cria os separadores dentro da aba */
  topic: string;
  /** 1-2 frases descrevendo o conteúdo da aula */
  description: string;
  /** rótulo livre mostrado no card, ex: "Vestibular", "3º período" */
  level: string;
  /** data de publicação, formato ISO (aaaa-mm-dd) */
  date: string;
  /**
   * pasta dentro de /public/aulas onde está o index.html exportado
   * ex: se a pasta é public/aulas/gravitacao/index.html, use "gravitacao"
   */
  folder: string;
  /** true se a aula ainda não tem arquivos publicados (aparece como "em breve") */
  comingSoon?: boolean;
};

export const lessons: Lesson[] = [
  {
    slug: "gravitacao",
    title: "Gravitação",
    subject: "Física",
    stage: "Ensino Médio",
    topic: "mecanica",
    description:
      "Lei da gravitação universal, órbitas e simulação interativa da atração entre corpos.",
    level: "Vestibular",
    date: "2026-05-20",
    folder: "mecanica/gravitacao",
  },{
    slug: "o-que-e-fisica",
    title: "O que é física?",
    subject: "Física",
    stage: "Ensino Médio",
    topic: "fisica elementar",
    description:
      "Introdução aos conceitos fundamentais da Física, método científico, unidades de medida, grandezas escalares e vetoriais e interpretação de gráficos.",
    level: "Vestibular",
    date: "2026-10-30",
    folder: "indroducao-a-fisica/o-que-e-fisica",
  },
  {
    slug: "circuitos-eletricos",
    title: "Circuitos eletricos",
    subject: "Física",
    stage: "Ensino Médio",
    topic: "eletromagnetismo",
    description:
      "Introdução aos circuitos elétricos, abordando corrente, tensão, resistência elétrica, Leis de Ohm, efeito Joule e associações de resistores em série e paralelo.",
    level: "Vestibular",
    date: "2026-10-30",
    folder: "eletromagnetismo/circuitos-eletricos",
  },
  {
    slug: "energia-e-potencia-eletrica",
    title: "Energia e potência elétrica",
    subject: "Física",
    stage: "Ensino Médio",
    topic: "eletromagnetismo",
    description:
      "Estudo da energia e potência elétrica, abordando consumo de energia, efeito Joule, cálculo da conta de luz, potência em resistores.",
    level: "Vestibular",
    date: "2026-10-30",
    folder: "eletromagnetismo/energia-e-potencia-eletrica",
  },
    {
    slug: "movimento-uniformimente-variado",
    title: "Movimento uniformimente variado",
    subject: "Física",
    stage: "Ensino Médio",
    topic: "cinematica",
    description:
      "Estudo do Movimento Uniformemente Variado (MUV), abordando aceleração, equações horárias, equação de Torricelli, interpretação de gráficos, queda livre e lançamento vertical.",
    level: "Vestibular",
    date: "2026-10-30",
    folder: "cinematica/movimento-uniformimente-variado",
  },
    {
    slug: "introducao-algebra-linear",
    title: "introduçao",
    subject: "Matemática",
    stage: "Graduação",
    topic: "Algebra Linear",
    description:
      "Uma jornada de quatro séculos mostrando como a necessidade de unir forma e número — de Descartes a Grassmann e Peano — deu origem à Álgebra Linear.",
    level: "Graduaçao",
    date: "2026-05-20",
    folder: "algebra-linear/introducao-algebra-linear",
  },
  {
    slug: "estruturas-algebricas",
    title: "Estruturas Algebricas",
    subject: "Matemática",
    stage: "Graduação",
    topic: "Algebra Linear",
    description:
      "Lei da gravitação universal, órbitas e simulação interativa da atração entre corpos.",
    level: "Graduaçao",
    date: "2026-05-20",
    folder: "algebra-linear/estruturas-algebricas",
  },
    {
    slug: "coordenadas-na-reta",
    title: "Coordenadas na Reta",
    subject: "Matemática",
    stage: "Graduação",
    topic: "Algebra Linear",
    description:
      "Lei da gravitação universal, órbitas e simulação interativa da atração entre corpos.",
    level: "Graduaçao",
    date: "2026-05-20",
    folder: "algebra-linear/coordenadas-na-reta",
     comingSoon: true,
  },
  // Adicione novas aulas aqui seguindo o mesmo formato.
  // {
  //   slug: "leis-de-newton",
  //   title: "Leis de Newton",
  //   subject: "Física",
  //   stage: "Ensino Médio",
  //   topic: "Mecânica",
  //   description: "As três leis de Newton com exemplos do cotidiano.",
  //   level: "Médio",
  //   date: "2026-08-01",
  //   folder: "leis-de-newton",
  // },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function getSortedLessons() {
  return [...lessons].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** remove acentos e caixa para comparação de busca tolerante */
export function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function matchesQuery(lesson: Lesson, query: string) {
  if (!query.trim()) return true;
  const q = normalize(query);
  return (
    normalize(lesson.title).includes(q) ||
    normalize(lesson.topic).includes(q) ||
    normalize(lesson.description).includes(q)
  );
}

/** agrupa uma lista de aulas (já ordenada/filtrada) por uma chave qualquer
 * (assunto, matéria, etc.); os grupos aparecem na ordem em que a primeira
 * aula de cada um surge na lista recebida */
export function groupBy(list: Lesson[], keyFn: (l: Lesson) => string) {
  const order: string[] = [];
  const map = new Map<string, Lesson[]>();
  for (const lesson of list) {
    const key = keyFn(lesson);
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(lesson);
  }
  return order.map((label) => ({ label, lessons: map.get(label)! }));
}
