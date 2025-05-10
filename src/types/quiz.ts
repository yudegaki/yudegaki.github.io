export interface QuizItem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  category: QuizCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
}

// ユーザーの回答を記録する型
export interface QuizAnswer {
  quizId: string;
  userAnswer: string | null;
  isCorrect: boolean;
  timeSpent: number; // 秒単位
}

export type coffeeQuizCategories =
  | '品種・分類'
  | '栽培・生産地'
  | '精製・加工法'
  | '焙煎'
  | '抽出・器具'
  | '風味・品質評価'
  | '歴史・文化'
  | '保存・流通'
  | 'その他';

export type QuizCategory = coffeeQuizCategories;

export type QuizDifficulty = 'easy' | 'medium' | 'hard';
