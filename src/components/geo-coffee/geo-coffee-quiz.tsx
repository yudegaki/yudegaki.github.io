import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Check, Trophy, CheckCircle2, XCircle } from "lucide-react";
import { GeoChart } from "@/components/geo-coffee/geochart";
import type { RegionData } from "@/types/country";
import { Progress } from "@/components/ui/progress";
import {
  getRandomCountryQuizzes,
  getCountryQuizzesLengthById,
} from "@/lib/country-quiz";

interface GeoCoffeeQuizProps {
  selectedRegion: RegionData;
  quizCount: number;
}

const REDIRECT_URL = "/geo-coffee-quiz";
const MAX_QUIZ_COUNT = 20;

export const GeoCoffeeQuiz = ({
  selectedRegion,
  quizCount,
}: GeoCoffeeQuizProps) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizCountLimit = Math.min(
    quizCount,
    getCountryQuizzesLengthById(selectedRegion.id) ?? MAX_QUIZ_COUNT
  );

  const quizData = useMemo(
    () => getRandomCountryQuizzes(selectedRegion.id, quizCountLimit),
    []
  );

  const currentQuiz = quizData[currentQuizIndex];
  const isCorrect = selectedCountry === currentQuiz.answer;

  const handleNext = () => {
    if (currentQuizIndex + 1 >= quizCountLimit) {
      setQuizComplete(true);
    } else {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedCountry(null);
      setIsAnswered(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry) return;

    if (isCorrect) setScore((prev) => prev + 1);
    setIsAnswered(true);
  };

  const renderFeedback = () => (
    <div
      className={`mt-6 rounded-lg p-4 sm:p-5 ${
        isCorrect
          ? "bg-green-50 border border-green-200 dark:bg-green-950/20 dark:border-green-900/30"
          : "bg-red-50 border border-red-200 dark:bg-red-950/20 dark:border-red-900/30"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        {isCorrect ? (
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
              不正解です。
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
  );

  const renderResult = () => (
    <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
      <Card className="w-full">
        <CardContent className="pt-6 text-center">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            {selectedRegion.name}クイズ完了！
          </h2>
          <p className="text-xl mb-2">あなたのスコア</p>
          <p className="text-4xl font-bold mb-6">
            {score} / {quizCountLimit}
          </p>
          <div className="mb-6">
            <Progress value={(score / quizCountLimit) * 100} className="h-4" />
          </div>
          <Alert
            className={
              score === quizCountLimit
                ? "bg-green-50 mb-4"
                : score >= quizCountLimit * 0.7
                ? "bg-blue-50 mb-4"
                : "bg-amber-50 mb-4"
            }
          >
            <AlertDescription className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>
                {score === quizCountLimit
                  ? "素晴らしい！満点です！"
                  : score >= quizCountLimit * 0.7
                  ? "よくできました！"
                  : "もう一度挑戦してみましょう！"}
              </span>
            </AlertDescription>
          </Alert>
          <Button
            onClick={() => (window.location.href = REDIRECT_URL)}
            className="w-full"
          >
            もう一度挑戦する
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  if (quizComplete) return renderResult();

  return (
    <div className="space-y-4 max-w-full mx-auto px-2 sm:px-4">
      <div className="flex items-center justify-between text-base md:text-sm text-muted-foreground font-medium">
        <div>
          問題 {currentQuizIndex + 1}/{quizCountLimit}
        </div>
        <span className="text-sm font-medium">
          スコア: {score}/{quizCountLimit}
        </span>
      </div>
      <Progress
        value={(currentQuizIndex / quizCountLimit) * 100}
        className="h-3"
      />
      <Card className="w-full">
        <CardHeader className="text-center p-6 md:p-8">
          Q. {currentQuiz.question}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center w-full">
            <GeoChart
              onSelectCountry={setSelectedCountry}
              regionCode={selectedRegion.geoChartRegion}
              countryCodeMapping={selectedRegion.countryCodeMapping}
              quizIndex={currentQuizIndex}
              collectAnswer={
                isAnswered && !isCorrect ? currentQuiz.answer : undefined
              }
            />
          </div>
          {isAnswered && renderFeedback()}
        </CardContent>
        <CardFooter className="pt-2 pb-4">
          <Button
            onClick={isAnswered ? handleNext : handleSubmit}
            className="w-full py-6 md:py-4 text-lg md:text-base"
            disabled={!isAnswered && !selectedCountry}
          >
            {isAnswered
              ? currentQuizIndex < quizData.length - 1
                ? "次の問題へ"
                : "結果を見る"
              : "回答する"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
