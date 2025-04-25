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
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 whitespace-pre-line">{description}</p>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <label htmlFor="questionCount" className="text-sm font-medium">
              問題数を選択してください
            </label>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setQuestionCount((prev) => Math.max(1, prev - 1))
                }
              >
                -
              </Button>
              <div className="w-16 text-center font-medium text-lg">
                {questionCount}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setQuestionCount((prev) => Math.min(20, prev + 1))
                }
              >
                +
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            size="lg"
            onClick={handleStartQuiz}
            className="w-full max-w-xs text-lg py-6"
          >
            クイズをスタート
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
