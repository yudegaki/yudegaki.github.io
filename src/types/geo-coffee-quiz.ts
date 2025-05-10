import { CountryCode } from "./country";

export interface CountryQuiz {
  id: string;
  question: string;
  answer: CountryCode;
  explanation: string;
}
