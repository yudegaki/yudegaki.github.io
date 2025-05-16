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
    question: 'コートジボワールはどこ？',
    answer: 'CI',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-5',
    question: 'イエメンはどこ？',
    answer: 'YE',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-6',
    question: 'ウガンダはどこ？',
    answer: 'UG',
    explanation: '覚えましょう',
  },
  {
    id: 'africa-7',
    question: '特定銘柄「キリマンジャロ」で知られるコーヒー豆の産地はどこ？',
    answer: 'TZ',
    explanation:
      'キリマンジャロはタンザニアで生産されるコーヒー豆です。ただし、ブコバ地区で生産された豆は含まれません。',
  },
  {
    id: 'africa-8',
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
  {
    id: 'central-america-4',
    question: 'メキシコはどこ？',
    answer: 'MX',
    explanation: '覚えましょう',
  },
  {
    id: 'central-america-5',
    question: 'エルサルバドルはどこ？',
    answer: 'SV',
    explanation: '覚えましょう',
  },
  {
    id: 'central-america-6',
    question: 'ニカラグアはどこ？',
    answer: 'NI',
    explanation: '覚えましょう',
  },
  {
    id: 'central-america-7',
    question: 'パナマはどこ？',
    answer: 'PA',
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
  {
    id: 'south-america-4',
    question: '格付けが ',
    answer: 'CL',
    explanation: '覚えましょう',}
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
    question: 'キューバはどこ？',
    answer: 'CU',
    explanation: '覚えましょう',
  },
  {
    id: 'caribbean-3',
    question: '規格が ETL, TL, AL で知られるコーヒー豆の産地はどこ？',
    answer: 'CU',
    explanation: 'キューバで生産されるコーヒー豆は、ETL, TL, AL という規格で知られています。',
  },
  {
    id: 'caribbean-4',
    question: '特定銘柄「クリスタルマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'CU',
    explanation: 'クリスタルマウンテンはキューバで生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-5',
    question: '特定銘柄「ブルーマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation: 'ブルーマウンテンはジャマイカのブルーマウンテン地区で生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-6',
    question: '特定銘柄「ハイマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation: 'ハイマウンテンはジャマイカのハイマウンテン地区で生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-7',
    question: '規格が No.1, No.2, No.3, セレクトで知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation: 'ジャマイカで生産されるコーヒー豆は、No.1, No.2, No.3, セレクトという規格で知られています。',
  },
];

export const allCountryQuizzes: Record<Region, CountryQuiz[]> = {
  southeastAsia: southeastAsiaQuizzes,
  africa: africaQuizzes,
  centralAmerica: centralAmericaQuizzes,
  southAmerica: southAmericaQuizzes,
  caribbean: caribbeanQuizzes,
};
