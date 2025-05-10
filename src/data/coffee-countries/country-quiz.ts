import { CountryQuiz } from '@/types/geo-coffee-quiz';
import { Region } from '@/types/country';

const southeastAsiaQuizzes: CountryQuiz[] = [
  {
    id: 'southeast-asia-1',
    question: 'ベトナムはどこ？',
    answer: 'VN',
    explanation: '覚えましょう',
  },
  {
    id: 'southeast-asia-2',
    question: 'インドネシアはどこ？',
    answer: 'ID',
    explanation: '覚えましょう',
  },
  {
    id: 'southeast-asia-3',
    question: '特定銘柄「マンデリン」で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'マンデリンはインドネシアのスマトラ島で生産されるコーヒー豆です。',
  },
];

const africaQuizzes: CountryQuiz[] = [
  {
    id: 'africa-1',
    question: 'エチオピアはどこ？',
    answer: 'ET',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-2',
    question: 'ケニアはどこ？',
    answer: 'KE',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-3',
    question: 'タンザニアはどこ？',
    answer: 'TZ',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-4',
    question: '特定銘柄「キリマンジャロ」で知られるコーヒー豆の産地はどこ？',
    answer: 'TZ',
    explanation:
      'キリマンジャロはタンザニアで生産されるコーヒー豆です。ただし、ブコバ地区で生産された豆は含まれません。',
  },
  {
    id: 'africa-5',
    question: '特定銘柄「モカハラー」で知られるコーヒー豆の産地はどこ？',
    answer: 'ET',
    explanation: 'モカハラーはエチオピアで生産されるコーヒー豆です。',
  },
];

export const allCountryQuizzes: Record<Region, CountryQuiz[]> = {
  southeastAsia: southeastAsiaQuizzes,
  africa: africaQuizzes,
};
