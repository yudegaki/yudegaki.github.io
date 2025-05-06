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

const coffeeGradingQuizzes: QuizItem[] = [
  {
    id: "grading1",
    question: "エチオピアのスペシャティグレードの最高ランクはどれ？",
    options: ["Grade 1", "Grade A", "Special Grade", "Top Ethiopia"],
    correctAnswer: "Grade 1",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "エチオピアのコーヒーは欠点数によってグレード分けされており、最も高品質なものが「Grade 1」とされます。次にGrade 2が続きます。",
  },
  {
    id: "grading2",
    question: "ブラジルのコーヒーの格付けにおいて、最高グレードはどれ？",
    options: ["No.4/5", "No.1", "No.3", "No.2"],
    correctAnswer: "No.2",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "ブラジルではスクリーンと欠点数による格付けが行われ、「No.2」が最上級とされています。スクリーンサイズによる分類(S-17/18,S-14/15/16)のあと、欠点数(No.2 の場合は 4 以下)によってグレードが決まります。",
  },
  {
    id: "grading3",
    question: "コロンビアのスペシャルティコーヒーにおける最高ランクの名称は？",
    options: ["Supremo", "Excelso", "Extra", "Premium"],
    correctAnswer: "Supremo",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation:
      "コロンビアでは豆のサイズによって格付けされており、最も大きく高品質とされるものが「Supremo」です。「Excelso」はそれに次ぐグレードです。",
  },
  {
    id: "grading4",
    question: "ジャマイカのブルーマウンテンコーヒーで、最も高い等級は？",
    options: ["No.1", "Blue Select", "Top Grade", "Blue Mountain Supreme"],
    correctAnswer: "No.1",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation:
      "ジャマイカのブルーマウンテンコーヒーは、サイズと欠点豆の数によってNo.1、No.2、No.3などに分類されます。No.1 が最上級です。スクリーンが S-17/18 かつ欠点数が 3% 以下のものが No.1 とされます。",
  },
  {
    id: "grading5",
    question: "グアテマラのSHB (Strictly Hard Bean) はどのような基準？",
    options: ["標高による分類", "風味による分類", "欠点豆の割合", "豆のサイズ"],
    correctAnswer: "標高による分類",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "SHBは標高1300m以上で栽培された高地産のコーヒーを指し、高品質で知られています。標高が高いほど豆は引き締まり、風味が豊かになります。",
  },
  {
    id: "grading6",
    question: "ハワイ・コナコーヒーの格付けで最上級に当たるのは？",
    options: ["Extra Fancy", "Fancy", "No.1", "Prime"],
    correctAnswer: "Extra Fancy",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "ハワイ・コナコーヒーでは豆のサイズと欠点数によって格付けされ、Extra Fancy が最上級、次に Fancy、No.1 と続きます。Extra Fancy はスクリーンが S-19 かつ欠点数が 8 以下のものを指します。",
  },
  {
    id: "grading7",
    question: "タンザニア産コーヒーの格付けで最高グレードの表示は？",
    options: ["AA", "AB", "PB", "Top Select"],
    correctAnswer: "AA",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "タンザニアのコーヒーは豆の大きさによって格付けされ、最も大きいAAが最高グレードとされています。ABはAAよりやや小さいサイズです。AA はスクリーンサイズが S-17 以上のものを指します。",
  },
  {
    id: "grading8",
    question: "キューバ産コーヒーの格付けで最高グレードの表示は？",
    options: ["AA", "ETL", "SHB", "AL"],
    correctAnswer: "ETL",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "ETLは「Extra Turquino Lavado」の略で、キューバ産コーヒーの最高グレードを示します。ETLはスクリーンサイズが S-18 以上かつ、欠点数が 12 以下のものを指します。",
  },
  {
    id: "grading9",
    question: "ケニアで最高品質のコーヒーに付けられる格付けは？",
    options: ["AA", "AB", "PB", "Top Kenya"],
    correctAnswer: "AA",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "ケニアでも豆の大きさによるグレーディングが行われ、AAが最上位です。ABはそれに次ぐグレードで、風味や品質にも差があります。",
  },
  {
    id: "grading10",
    question: "コロンビアで使われる格付け『Excelso』はどのような豆？",
    options: [
      "サイズが最も大きい豆",
      "標高1500m以上で育てられた豆",
      "サイズが中程度の豆",
      "欠点が全くない最高級豆",
    ],
    correctAnswer: "サイズが中程度の豆",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "コロンビアでは豆のサイズにより格付けされ、『Supremo』が最大で、『Excelso』はそれよりやや小さいサイズの豆を指します。品質が劣るわけではなく、風味の個性が異なるだけです。",
  },
  {
    id: "grading11",
    question: "コスタリカで見られるSHB(Strictly Hard Bean)は何を表す？",
    options: ["精製方法", "栽培標高", "豆のサイズ", "発酵の有無"],
    correctAnswer: "栽培標高",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation:
      "SHB(Strictly Hard Bean)は標高が高い場所(およそ1200m以上)で栽培された豆を指します。高地栽培の豆は品質が高くなりやすいとされています。",
  },
  {
    id: "grading12",
    question: "ペルーのコーヒー格付けで、最高グレードに該当するものは？",
    options: ["Grade 1", "Superior", "Fancy", "Top Select"],
    correctAnswer: "Grade 1",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "ペルーでは欠点数を基準に格付けされ、最も品質の良いコーヒーはGrade 1とされます。",
  },
  {
    id: "grading13",
    question: "インドネシアのコーヒーの格付けで、最も高品質とされるのは？",
    options: ["Grade 1", "Mandheling AA", "", "Wet-Hulled"],
    correctAnswer: "Grade 1",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "インドネシアではスクリーンと欠点数による格付けが行われ、Grade 1が最上級とされています。",
  },
  {
    id: "grading14",
    question: "HG, PW がコーヒー豆の格付けの規格として使われる国は？",
    options: ["メキシコ", "グアテマラ", "コスタリカ", "ブラジル"],
    correctAnswer: "メキシコ",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "メキシコでは標高による格付けが行われており、HGは 900m 以上、PWは 600m 以上で栽培された豆を指します。HGは高品質なコーヒーとされています。",
  },
  {
    id: "grading15",
    question: "ベトナムのコーヒーの格付けで使用される評価基準はどれ？",
    options: ["標高", "スクリーンと欠点数", "スクリーン", "欠点数"],
    correctAnswer: "スクリーンと欠点数",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation:
      "ベトナムでは、スクリーンサイズと欠点数による格付けが行われています。S-16 ~ かつ 欠点数が 60 以下のものが Grade 1 、S-12.5 ~ かつ 欠点数が 90 以下のものが Grade 2 とされます。",
  },
  {
    id: "grading16",
    question: "メキシコのコーヒー格付け「Altura」はどんな特徴を示す？",
    options: ["豆のサイズが大きい", "発酵度が高い", "高地栽培", "完全水洗式"],
    correctAnswer: "高地栽培",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation:
      "「Altura(アルトゥーラ)」はスペイン語で「高地」を意味し、標高の高い地域で育てられた豆のことを指します。",
  },
  {
    id: "grading17",
    question: "エルサルバドルの「High Grown(HG)」はどのような基準？",
    options: ["豆のサイズ", "風味の良さ", "標高の高さ", "収穫量の多さ"],
    correctAnswer: "標高の高さ",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "エルサルバドルでは、標高900~1200mの地域で栽培されたコーヒーをHG(High Grown)と呼び、SHGよりはやや低い位置にあります。",
  },
  {
    id: "grading18",
    question:
      "エチオピアで「Grade 4」や「Grade 5」とされるコーヒーの主な特徴は?",
    options: [
      "非常に高品質なコーヒー",
      "中程度の酸味",
      "欠点数が多めの低品質",
      "特殊な乾燥方法を使用",
    ],
    correctAnswer: "欠点数が多めの低品質",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "エチオピアでは欠点豆の数により1〜9のグレードがあり、Grade 4や5は欠点数が多く、比較的品質が低いとされます。",
  },
  {
    id: "grading19",
    question: "ケニアの格付けにおける「PB」は何を意味する?",
    options: [
      "豆が熟していない",
      "丸豆（ピーベリー）",
      "発酵度が高い",
      "特別な輸送方法",
    ],
    correctAnswer: "丸豆（ピーベリー）",
    category: "風味・品質評価",
    difficulty: "medium",
    explanation:
      "PB (Peaberry)は1つのコーヒーチェリーに1粒だけ豆が形成された特異な形状の豆で、通常より丸く、風味が凝縮されるとされています。",
  },
  {
    id: "grading20",
    question: "中南米のコーヒーの格付けで共通して使われている基準は？",
    options: ["標高", "スクリーン", "スクリーンと欠点数", "欠点数"],
    correctAnswer: "標高",
    category: "風味・品質評価",
    difficulty: "easy",
    explanation: "中南米の国では基本的に標高による格付けが行われています。",
  },
];

// すべてのクイズデータを結合
export const allCoffeeQuizzes: QuizItem[] = [
  ...twoChoiceQuizzes,
  ...coffeeGradingQuizzes,
];

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
