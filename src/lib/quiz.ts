import { allCoffeeQuizzes } from '@/data/quiz/coffeequiz';
import { QuizItem } from '@/types/quiz';

const getQuizData = (quizTopic: string): QuizItem[] => {
  switch (quizTopic) {
    case 'coffeequiz':
      return allCoffeeQuizzes;
    default:
      return [];
  }
};

export const getRandomQuizzes = (
  quizTopic: string,
  count: number
): QuizItem[] => {
  const allQuizzes = getQuizData(quizTopic);
  const shuffled = [...allQuizzes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getQuizzesByCategory = (
  quizTopic: string,
  category: string
): QuizItem[] => {
  return getQuizData(quizTopic).filter((quiz) => quiz.category === category);
};

export const getQuizzesByDifficulty = (
  quizTopic: string,
  difficulty: 'easy' | 'medium' | 'hard'
): QuizItem[] => {
  return getQuizData(quizTopic).filter(
    (quiz) => quiz.difficulty === difficulty
  );
};

export const getQuizById = (
  quizTopic: string,
  id: string
): QuizItem | undefined => {
  const allQuizzes = getQuizData(quizTopic);
  return allQuizzes.find((quiz) => quiz.id === id);
};
