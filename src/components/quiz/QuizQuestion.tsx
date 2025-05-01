"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";
import QuizResults from "@/components/quiz/QuizResults";
import type { QuizAnswer, QuizItem } from "@/types/quiz";
import { getRandomQuizzes } from "@/lib/quiz";

interface QuizQuestionProps {
  quizTopic: string;
  quizCount: number; // クイズの数を指定
}

export default function QuizQuestion({
  quizTopic,
  quizCount,
}: QuizQuestionProps) {
  // クイズデータを別ファイルから取得
  const [quizData] = useState<QuizItem[]>(
    getRandomQuizzes(quizTopic, quizCount)
  );
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [userAnswers, setUserAnswers] = useState<QuizAnswer[]>([]);

  // 現在のクイズ
  const currentQuiz: QuizItem = quizData[currentQuizIndex];

  // 回答を提出
  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setIsAnswered(true);
    const endTime = Date.now();
    const timeSpent = Math.round((endTime - startTime) / 1000); // 秒単位に変換

    // 回答を記録
    const answer: QuizAnswer = {
      quizId: currentQuiz.id,
      userAnswer: selectedAnswer,
      isCorrect: selectedAnswer === currentQuiz.correctAnswer,
      timeSpent: timeSpent,
    };

    setUserAnswers([...userAnswers, answer]);
  };

  // 次のクイズへ進む
  const handleNext = () => {
    if (currentQuizIndex < quizData.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setStartTime(Date.now()); // 新しい問題の開始時間をリセット
    } else {
      // 全てのクイズが終了
      setQuizCompleted(true);
    }
  };

  // 進捗率を計算
  const progress = ((currentQuizIndex + 1) / quizData.length) * 100;

  // 正解数を計算
  const correctAnswers = userAnswers.filter(
    (answer) => answer.isCorrect
  ).length;

  // 結果画面
  if (quizCompleted) {
    return (
      <QuizResults
        quizId={quizTopic}
        quizData={quizData}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <div className="space-y-4 max-w-full mx-auto px-2 sm:px-4">
      <div className="flex items-center justify-between text-base md:text-sm text-muted-foreground font-medium">
        <div>
          問題 {currentQuizIndex + 1} / {quizData.length}
        </div>
        <div>正解: {correctAnswers}</div>
      </div>

      <Progress value={progress} className="h-3" />

      <Card className="w-full shadow-md">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl md:text-xl leading-tight">
              {currentQuiz.question}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <RadioGroup
            value={selectedAnswer || ""}
            onValueChange={setSelectedAnswer}
            className="space-y-4"
          >
            {currentQuiz.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center rounded-lg border p-4 sm:p-5 transition-colors hover:bg-muted ${
                  selectedAnswer === option ? "border-primary bg-muted/50" : ""
                } ${
                  isAnswered && option === currentQuiz.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : ""
                } ${
                  isAnswered &&
                  selectedAnswer === option &&
                  option !== currentQuiz.correctAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                    : ""
                }`}
                onClick={() => {
                  if (!isAnswered) {
                    setSelectedAnswer(option);
                  }
                }}
              >
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="mr-4 h-5 w-5"
                  disabled={isAnswered}
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="w-full cursor-pointer font-medium text-lg md:text-base"
                >
                  &nbsp;{option}
                </Label>
                {isAnswered && option === currentQuiz.correctAnswer && (
                  <CheckCircle2 className="ml-auto h-6 w-6 text-green-500 flex-shrink-0" />
                )}
                {isAnswered &&
                  selectedAnswer === option &&
                  option !== currentQuiz.correctAnswer && (
                    <XCircle className="ml-auto h-6 w-6 text-red-500 flex-shrink-0" />
                  )}
              </div>
            ))}
          </RadioGroup>

          {/* 正誤判定と解説を表示 */}
          {isAnswered && (
            <div
              className={`mt-6 rounded-lg p-4 sm:p-5 ${
                selectedAnswer === currentQuiz.correctAnswer
                  ? "bg-green-50 border border-green-200 dark:bg-green-950/20 dark:border-green-900/30"
                  : "bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {selectedAnswer === currentQuiz.correctAnswer ? (
                  <>
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <h3 className="font-medium text-green-700 dark:text-green-400 text-lg md:text-base">
                      正解です！
                    </h3>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-red-500" />
                    <h3 className="font-medium text-red-700 dark:text-red-400 text-lg md:text-base">
                      不正解です。正解は「{currentQuiz.correctAnswer}」です。
                    </h3>
                  </>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-base md:text-sm font-medium mb-2">解説:</h3>
                <p className="text-base md:text-sm text-muted-foreground">
                  {currentQuiz.explanation}
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-2 pb-4">
          {!isAnswered ? (
            <Button
              onClick={handleSubmit}
              className="w-full py-6 md:py-4 text-lg md:text-base"
              disabled={!selectedAnswer}
            >
              回答する
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="w-full py-6 md:py-4 text-lg md:text-base"
            >
              {currentQuizIndex < quizData.length - 1
                ? "次の問題へ"
                : "結果を見る"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
