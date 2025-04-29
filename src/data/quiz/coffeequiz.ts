import type { QuizItem } from "@/types/quiz";

// 2択クイズ
const twoChoiceQuizzes: QuizItem[] = [
  {
    id: "twochoice1",
    question:
      "リキッドコーヒーで、生豆の含有量が 2.5 ~ 5 % のものはコーヒー飲料と呼ばれる。",
    options: ["はい", "いいえ"],
    correctAnswer: "はい",
    category: "その他",
    difficulty: "easy",
    explanation:
      "コーヒー飲料は、リキッドコーヒーのうち生豆の含有量が 2.5 ~ 5 % のものを指します。生豆の含有量が 5 % 以上のものは「コーヒー」、生豆の含有量が 1.5 ~ 2.5% のものは「コーヒー入り清涼飲料水」と呼ばれています。",
  },
  {
    id: "twochoice2",
    question: "アラビカ種は自家受粉をすることができる",
    options: ["はい", "いいえ"],
    correctAnswer: "はい",
    category: "栽培・生産地",
    difficulty: "easy",
    explanation:
      "アラビカ種は自家受粉性の植物で、一株でも受粉が可能です。一方、カネフォラ種は他家受粉性で、他の株との交配が必要です。",
  },
  {
    id: "twochoice3",
    question: "コーヒーの木は常緑樹である",
    options: ["はい", "いいえ"],
    correctAnswer: "はい",
    category: "栽培・生産地",
    difficulty: "easy",
    explanation:
      "コーヒーの木は常緑樹で、葉が落ちることなく一年中緑を保ちます。これにより、コーヒーの木は年間を通じて光合成を行い、成長し続けることができます。",
  },
];

// すべてのクイズデータを結合
export const allCoffeeQuizzes: QuizItem[] = [...twoChoiceQuizzes];

export type coffeeQuizCategories =
  | "品種・分類"
  | "栽培・生産地"
  | "精製・加工法"
  | "焙煎"
  | "抽出・器具"
  | "風味・品質評価"
  | "歴史・文化"
  | "保存・流通"
  | "その他";
