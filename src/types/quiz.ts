import { coffeeQuizCategories } from "@/data/quiz/coffeequiz";

export interface QuizItem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  category: QuizCategory;
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
}

// ユーザーの回答を記録する型
export interface QuizAnswer {
  quizId: string;
  userAnswer: string | null;
  isCorrect: boolean;
  timeSpent: number; // 秒単位
}

export type QuizCategory = coffeeQuizCategories;

export type QuizDifficulty = "easy" | "medium" | "hard";
