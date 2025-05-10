import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import QuizQuestion from '@/components/quiz/quiz-question';
import { AnimatePresence, motion } from 'framer-motion';

export interface QuizStartProps {
  quizTopic: string; // path 名と一致させる
  title: string;
  description: string; // 改行を含む場合は \n を使用
}
const MIN_QUIZ_COUNT = 1;
const DEFAULT_QUIZ_COUNT = 10;
const MAX_QUIZ_COUNT = 20;

export default function QuizStartScreen({
  quizTopic,
  title,
  description,
}: QuizStartProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCount, setQuizCount] = useState(DEFAULT_QUIZ_COUNT);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  if (quizStarted) {
    return <QuizQuestion quizTopic={quizTopic} quizCount={quizCount} />;
  }

  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md md:max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center p-6 md:p-8">
          <CardTitle className="text-3xl md:text-3xl lg:text-4xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-6 md:px-8 pb-8">
          <p className="mb-8 whitespace-pre-line text-lg md:text-xl">
            {description}
          </p>

          <div className="flex flex-col items-center space-y-4 mt-6">
            <label className="text-lg md:text-xl font-medium text-gray-700">
              問題数を選択してください
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full text-3xl font-bold hover:bg-red-100 transition"
                onClick={() =>
                  setQuizCount((prev) => Math.max(MIN_QUIZ_COUNT, prev - 1))
                }
              >
                −
              </Button>
              <div />

              <div className="w-24 h-16 flex items-center justify-center text-4xl font-bold border rounded-xl shadow-inner bg-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={quizCount}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {quizCount}
                  </motion.span>
                </AnimatePresence>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full text-3xl font-bold hover:bg-green-100 transition"
                onClick={() =>
                  setQuizCount((prev) => Math.min(MAX_QUIZ_COUNT, prev + 1))
                }
              >
                ＋
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-6 md:p-8 pt-0">
          <Button
            size="lg"
            onClick={handleStartQuiz}
            className="w-full max-w-xs text-xl md:text-2xl py-8 rounded-xl font-bold"
          >
            クイズをスタート
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
