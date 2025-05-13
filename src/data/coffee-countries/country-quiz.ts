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

const centralAmericaQuizzes: CountryQuiz[] = [
  {
    id: 'central-america-1',
    question: 'コスタリカはどこ？',
    answer: 'CR',
    explanation: '覚えましょう',
  },
  {
    id: 'central-america-2',
    question: 'グアテマラはどこ？',
    answer: 'GT',
    explanation: '覚えましょう',
  },
  {
    id: 'central-america-3',
    question: 'ホンジュラスはどこ？',
    answer: 'HN',
    explanation: '覚えましょう',
  },
];
const southAmericaQuizzes: CountryQuiz[] = [
  {
    id: 'south-america-1',
    question: 'ブラジルはどこ？',
    answer: 'BR',
    explanation: '覚えましょう',
  },
  {
    id: 'south-america-2',
    question: 'コロンビアはどこ？',
    answer: 'CO',
    explanation: '覚えましょう',
  },
  {
    id: 'south-america-3',
    question: 'ペルーはどこ？',
    answer: 'PE',
    explanation: '覚えましょう',
  },
];

const caribbeanQuizzes: CountryQuiz[] = [
  {
    id: 'caribbean-1',
    question: 'ジャマイカはどこ？',
    answer: 'JM',
    explanation: '覚えましょう',
  },
  {
    id: 'caribbean-2',
    question: 'ドミニカ共和国はどこ？',
    answer: 'DO',
    explanation: '覚えましょう',
  },
  {
    id: 'caribbean-3',
    question: 'キューバはどこ？',
    answer: 'CU',
    explanation: '覚えましょう',
  },
];

export const allCountryQuizzes: Record<Region, CountryQuiz[]> = {
  southeastAsia: southeastAsiaQuizzes,
  africa: africaQuizzes,
  centralAmerica: centralAmericaQuizzes,
  southAmerica: southAmericaQuizzes,
  caribbean: caribbeanQuizzes,
};
