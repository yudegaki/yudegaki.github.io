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
      'マンデリンはインドネシアの北スマトラ州及びアチェ州（タケンゴン周辺のガヨマウンテン生産地区を除く）にて生産されたアラビカコーヒー豆です。',
  },
  {
    id: 'southeast-asia-4',
    question: '特定銘柄「トラジャ」で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'トラジャはインドネシアのスラウェシ島トラジャ地区にて生産されたアラビカコーヒー豆です。',
  },
  {
    id: 'southeast-asia-5',
    question: '特定銘柄「ガヨマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'ガヨマウンテンはインドネシアのスマトラ島タケンゴン地区にて生産されたアラビカコーヒー豆です。',
  },
  {
    id: 'southeast-asia-6',
    question: '特定銘柄「カロシ」で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'カロシはインドネシアのスラウェシ島カロシ地区にて生産されたアラビカコーヒー豆です。',
  },
  {
    id: 'southeast-asia-7',
    question:
      'コーヒー豆の生産量が世界第2位で、世界一のカネフォラ種の生産国はどこ？',
    answer: 'VN',
    explanation:
      'ベトナムはコーヒー豆の生産量が世界第2位で、主にカネフォラ(ロブスタ)種を生産しています。',
  },
  {
    id: 'southeast-asia-8',
    question:
      '規格が G1, G2 で知られ、格付けがスクリーンサイズと欠点数で知られるコーヒー豆の産地はどこ？',
    answer: 'VN',
    explanation:
      'ベトナムで生産されるコーヒー豆は、G1, G2という規格で知られています。格付け方式はスクリーンサイズと欠点数です。',
  },
  {
    id: 'southeast-asia-9',
    question: '収穫が年2回行われる国はどこ？',
    answer: 'ID',
    explanation: 'インドネシアでは、コーヒーの収穫が年2回行われます。',
  },
  {
    id: 'southeast-asia-10',
    question:
      '規格が G1 ~ G5 で知られ、格付けがスクリーンサイズと欠点数で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'インドネシアで生産されるコーヒー豆は、G1 ~ G5 という規格で知られています。格付け方式はスクリーンサイズと欠点数です。',
  },
  {
    id: 'southeast-asia-11',
    question: '精製方法がスマトラ式で知られるコーヒー豆の産地はどこ？',
    answer: 'ID',
    explanation:
      'インドネシアで生産されるコーヒー豆は、スマトラ式という精製方法で知られています。スマトラ式は、粘液質が残ったまま一部乾燥後に脱殻し、その後再乾燥する方法です。',
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
    question: '規格が AA, AB で知られ、年2回収穫が行われる国はどこ？',
    answer: 'KE',
    explanation:
      'ケニアで生産されるコーヒー豆は、AA, ABという規格で知られており、赤道が通るため収穫は年2回行われます。',
  },
  {
    id: 'africa-5',
    question: '特定銘柄「キリマンジャロ」で知られるコーヒー豆の産地はどこ？',
    answer: 'TZ',
    explanation: 'キリマンジャロはタンザニアで生産されるコーヒー豆です。',
  },
  {
    id: 'africa-6',
    question: '規格が AA, AB で知られ、ケニアと隣接している国はどこ？',
    answer: 'TZ',
    explanation: 'タンザニアで生産されるコーヒー豆は、AA, ABという規格で知られています。',
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
  {
    id: 'africa-9',
    question:
      '格付けがスクリーンサイズ、規格が AA, AB で知られ、エチオピアと隣接している国はどこ？',
    answer: 'KE',
    explanation:
      'ケニアで生産されるコーヒー豆は、AA, ABという規格で知られています。格付け方式はスクリーンサイズです。',
  },
  {
    id: 'africa-10',
    question: '格付けが欠点数、規格が G1 ~ G5 のコーヒー豆の産地はどこ？',
    answer: 'ET',
    explanation:
      'エチオピアで生産されるコーヒー豆は、G1 ~ G5という規格で知られています。格付け方式は欠点数です。',
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
  {
    id: 'central-america-8',
    question:
      '特定銘柄「グアテマラアンティグア」で知られるコーヒー豆の産地はどこ？',
    answer: 'GT',
    explanation:
      'グアテマラアンティグアはグアテマラで生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'central-america-9',
    question: '規格が HG, PW で知られるコーヒー豆の産地はどこ？',
    answer: 'MX',
    explanation:
      'メキシコで生産されるコーヒー豆は、HG, PWという規格で知られています。',
  },
  {
    id: 'central-america-10',
    question: '規格が SHB, HB で知られるコーヒー豆の産地はどこ？',
    answer: 'CR',
    explanation:
      'コスタリカ(中央高地)で生産されるコーヒー豆は、SHB, HBという規格で知られています。',
  },
  {
    id: 'central-america-11',
    question: '規格が SHB, HB, EPW で知られるコーヒー豆の産地はどこ？',
    answer: 'GT',
    explanation:
      'グアテマラで生産されるコーヒー豆は、SHB, HB, EPWという規格で知られています。',
  },
  {
    id: 'central-america-12',
    question:
      '規格が SHG, HG で知られ、ホンジュラス、コスタリカと隣接している国はどこ？',
    answer: 'NI',
    explanation:
      'ニカラグアで生産されるコーヒー豆は、SHG, HGという規格で知られています。',
  },
  {
    id: 'central-america-13',
    question:
      '規格が SHG, HG で知られ、グアテマラ、エルサルバドルと隣接している国はどこ？',
    answer: 'HN',
    explanation:
      'ホンジュラスで生産されるコーヒー豆は、SHG, HGという規格で知られています。',
  },
  {
    id: 'central-america-14',
    question:
      '規格が SHG, HG で知られ、グアテマラ、ホンジュラスと隣接している国はどこ？',
    answer: 'SV',
    explanation:
      'エルサルバドルで生産されるコーヒー豆は、SHG, HGという規格で知られています。',
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
    question:
      '規格が エクセルソスプレモ、エクセルソUGQ で知られるコーヒー豆の産地はどこ？',
    answer: 'CO',
    explanation:
      'コロンビアで生産されるコーヒー豆は、エクセルソスプレモ、エクセルソUGQという規格で知られています。',
  },
  {
    id: 'south-america-5',
    question:
      '特定銘柄「コロンビアスプレモ」で知られるコーヒー豆の産地はどこ？',
    answer: 'CO',
    explanation:
      'コロンビアスプレモはコロンビアで生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'south-america-6',
    question: '規格が No.2, No.4/5 で知られるコーヒー豆の産地はどこ？',
    answer: 'BR',
    explanation:
      'ブラジルで生産されるコーヒー豆は、No.2, No.4/5という規格で知られています。',
  },
  {
    id: 'south-america-7',
    question:
      '規格が G1 ~ G5 , 格付け方式が 欠点数で知られ、ブラジルとコロンビアに隣接している国はどこ？',
    answer: 'PE',
    explanation:
      'ペルーで生産されるコーヒー豆は、G1 ~ G5という規格で知られています。格付け方式は欠点数です。',
  },
  {
    id: 'south-america-8',
    question:
      'コーヒーの生産量が世界第1位で、アラビカ種とロブスタ種の両方を生産している国はどこ？',
    answer: 'BR',
    explanation:
      'ブラジルはコーヒーの生産量が世界第1位で、アラビカ種とロブスタ種の両方を生産しています。',
  },
  {
    id: 'south-america-9',
    question: '水洗式のコーヒー豆の生産量が世界第1位の国はどこ？',
    answer: 'CO',
    explanation: 'コロンビアは水洗式のコーヒー豆の生産量が世界第1位です。',
  },
  {
    id: 'south-america-10',
    question: '収穫が年2回行われる国はどこ？',
    answer: 'CO',
    explanation:
      'コロンビアでは、コーヒーの収穫が年2回行われます。ブラジルは赤道が通っていますが、栽培地域は赤道から離れているため年1回の収穫です。',
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
    question: 'キューバはどこ？',
    answer: 'CU',
    explanation: '覚えましょう',
  },
  {
    id: 'caribbean-3',
    question: '規格が ETL, TL, AL で知られるコーヒー豆の産地はどこ？',
    answer: 'CU',
    explanation:
      'キューバで生産されるコーヒー豆は、ETL, TL, AL という規格で知られています。',
  },
  {
    id: 'caribbean-4',
    question:
      '特定銘柄「クリスタルマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'CU',
    explanation:
      'クリスタルマウンテンはキューバで生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-5',
    question: '特定銘柄「ブルーマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation:
      'ブルーマウンテンはジャマイカのブルーマウンテン地区で生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-6',
    question: '特定銘柄「ハイマウンテン」で知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation:
      'ハイマウンテンはジャマイカのハイマウンテン地区で生産されるアラビカ種コーヒー豆です。',
  },
  {
    id: 'caribbean-7',
    question:
      '規格が No.1, No.2, No.3, セレクトで知られるコーヒー豆の産地はどこ？',
    answer: 'JM',
    explanation:
      'ジャマイカで生産されるコーヒー豆は、No.1, No.2, No.3, セレクトという規格で知られています。',
  },
];

export const allCountryQuizzes: Record<Region, CountryQuiz[]> = {
  southeastAsia: southeastAsiaQuizzes,
  africa: africaQuizzes,
  centralAmerica: centralAmericaQuizzes,
  southAmerica: southAmericaQuizzes,
  caribbean: caribbeanQuizzes,
};
