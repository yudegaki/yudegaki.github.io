import { CountryQuiz } from '@/types/geo-coffee-quiz';
import { allCountryQuizzes } from '@/data/coffee-countries/country-quiz';
import { Region } from '@/types/country';

export const getCountryQuizzesById = (quizId: Region): CountryQuiz[] | null => {
  return allCountryQuizzes[quizId] || null;
};

export const getCountryQuizzesLengthById = (quizId: Region): number | null => {
  const quizzes = allCountryQuizzes[quizId];
  return quizzes ? quizzes.length : null;
};

export const getRandomCountryQuizzes = (
  quizId: Region,
  count: number
): CountryQuiz[] => {
  const allQuizzes = getCountryQuizzesById(quizId);
  if (!allQuizzes) return [];

  const shuffled = [...allQuizzes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
