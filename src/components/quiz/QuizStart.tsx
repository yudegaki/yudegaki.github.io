import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuizQuestion from "@/components/quiz/QuizQuestion";

export interface QuizStartProps {
  quizTopic: string; // path 名と一致させる
  title: string;
  description: string; // 改行を含む場合は \n を使用
}

export default function QuizStartScreen({
  quizTopic,
  title,
  description,
}: QuizStartProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(10); // デフォルトは10問

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  if (quizStarted) {
    return <QuizQuestion quizTopic={quizTopic} quizCount={questionCount} />;
  }

  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md md:max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-6 md:px-8 pb-8">
          <p className="mb-8 whitespace-pre-line text-lg md:text-xl">
            {description}
          </p>
          <div className="flex flex-col items-center space-y-4 mt-6">
            <label
              htmlFor="questionCount"
              className="text-lg md:text-xl font-medium"
            >
              問題数を選択してください
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-14 text-2xl font-bold"
                onClick={() =>
                  setQuestionCount((prev) => Math.max(1, prev - 1))
                }
              >
                -
              </Button>
              <div className="w-20 text-center font-bold text-3xl">
                {questionCount}
              </div>
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-14 text-2xl font-bold"
                onClick={() =>
                  setQuestionCount((prev) => Math.min(20, prev + 1))
                }
              >
                +
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
