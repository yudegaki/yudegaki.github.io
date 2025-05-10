import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { QuizItem, QuizAnswer } from '@/types/quiz';
import { CheckCircle2, Clock, Medal, XCircle } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface QuizResultsProps {
  quizId: string;
  quizData: QuizItem[];
  userAnswers: QuizAnswer[];
}

export default function QuizResults({
  quizId,
  quizData,
  userAnswers,
}: QuizResultsProps) {
  const [activeTab, setActiveTab] = useState('summary');

  // 正解数を計算
  const correctAnswers = userAnswers.filter(
    (answer) => answer.isCorrect
  ).length;
  const totalQuestions = quizData.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  // 円グラフのデータ
  const pieData = [
    { name: '正解', value: correctAnswers, color: '#10b981' },
    {
      name: '不正解',
      value: totalQuestions - correctAnswers,
      color: '#ef4444',
    },
  ];

  // カテゴリ別の成績データを作成
  const categories = [...new Set(quizData.map((quiz) => quiz.category))];
  const categoryData = categories.map((category) => {
    const categoryQuizzes = quizData.filter(
      (quiz) => quiz.category === category
    );
    const categoryAnswers = categoryQuizzes
      .map((quiz) => userAnswers.find((answer) => answer.quizId === quiz.id))
      .filter(Boolean) as QuizAnswer[];

    const categoryCorrect = categoryAnswers.filter(
      (answer) => answer.isCorrect
    ).length;
    const categoryTotal = categoryQuizzes.length;
    const categoryPercentage = Math.round(
      (categoryCorrect / categoryTotal) * 100
    );

    return {
      name: category,
      正解率: categoryPercentage,
      問題数: categoryTotal,
    };
  });

  // 難易度別の成績データを作成
  const difficultyData = [
    { name: '簡単', value: calculateDifficultyScore('easy') },
    { name: '普通', value: calculateDifficultyScore('medium') },
    { name: '難しい', value: calculateDifficultyScore('hard') },
  ].filter((item) => item.value !== null);

  function calculateDifficultyScore(difficulty: 'easy' | 'medium' | 'hard') {
    const difficultyQuizzes = quizData.filter(
      (quiz) => quiz.difficulty === difficulty
    );
    if (difficultyQuizzes.length === 0) return null;

    const difficultyAnswers = difficultyQuizzes
      .map((quiz) => userAnswers.find((answer) => answer.quizId === quiz.id))
      .filter(Boolean) as QuizAnswer[];

    const difficultyCorrect = difficultyAnswers.filter(
      (answer) => answer.isCorrect
    ).length;
    const difficultyTotal = difficultyQuizzes.length;
    return Math.round((difficultyCorrect / difficultyTotal) * 100);
  }

  // 平均回答時間を計算
  const totalTime = userAnswers.reduce(
    (acc, answer) => acc + answer.timeSpent,
    0
  );
  const averageTime = Math.round(totalTime / userAnswers.length);

  // 成績評価を取得
  const getGrade = (percentage: number) => {
    if (percentage >= 90)
      return { grade: 'S', comment: '素晴らしい！完璧に近い成績です！' };
    if (percentage >= 80) return { grade: 'A', comment: '優秀な成績です！' };
    if (percentage >= 70) return { grade: 'B', comment: '良い成績です！' };
    if (percentage >= 60)
      return { grade: 'C', comment: 'まずまずの成績です。' };
    if (percentage >= 50)
      return { grade: 'D', comment: 'もう少し頑張りましょう。' };
    return { grade: 'F', comment: '復習が必要です。' };
  };

  const gradeInfo = getGrade(scorePercentage);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-center">クイズ結果</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">サマリー</TabsTrigger>
            <TabsTrigger value="details">詳細分析</TabsTrigger>
            <TabsTrigger value="questions">問題別</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4 pt-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Medal className="h-8 w-8 text-yellow-500" />
                <h2 className="text-2xl font-bold">
                  総合評価: {gradeInfo.grade}
                </h2>
              </div>

              <div className="text-6xl font-bold text-primary">
                {correctAnswers} / {totalQuestions}
              </div>

              <div className="text-xl">正答率: {scorePercentage}%</div>

              <div className="text-center text-muted-foreground">
                {gradeInfo.comment}
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>平均回答時間: {averageTime}秒</span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6 pt-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">カテゴリ別成績</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis unit="%" />
                    <Tooltip />
                    <Bar dataKey="正解率" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {difficultyData.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-medium">難易度別成績</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={difficultyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip />
                      <Bar dataKey="value" name="正解率" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            <div>
              <h3 className="mb-4 text-lg font-medium">回答時間分析</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={userAnswers.map((answer, index) => ({
                      name: `問題${index + 1}`,
                      時間: answer.timeSpent,
                      正解: answer.isCorrect ? '○' : '×',
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis unit="秒" />
                    <Tooltip />
                    <Bar dataKey="時間" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="questions" className="space-y-4 pt-4">
            <div className="space-y-4">
              {quizData.map((quiz, index) => {
                const answer = userAnswers.find((a) => a.quizId === quiz.id);
                if (!answer) return null;

                return (
                  <Card
                    key={quiz.id}
                    className={`border-l-4 ${
                      answer.isCorrect
                        ? 'border-l-green-500'
                        : 'border-l-red-500'
                    }`}
                  >
                    <CardHeader className="py-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              問題 {index + 1}:
                            </span>
                            {answer.isCorrect ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            カテゴリ: {quiz.category} | 難易度:{' '}
                            {quiz.difficulty === 'easy'
                              ? '簡単'
                              : quiz.difficulty === 'medium'
                              ? '普通'
                              : '難しい'}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{answer.timeSpent}秒</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="font-medium">{quiz.question}</p>
                      <div className="mt-2 grid gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            あなたの回答:
                          </span>
                          <span
                            className={
                              answer.isCorrect
                                ? 'text-green-600'
                                : 'text-red-600'
                            }
                          >
                            {answer.userAnswer}
                          </span>
                        </div>
                        {!answer.isCorrect && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">正解:</span>
                            <span className="text-green-600">
                              {quiz.correctAnswer}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 pt-3 border-t">
                        <h4 className="text-sm font-medium mb-1">解説:</h4>
                        <p className="text-sm text-muted-foreground">
                          {quiz.explanation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => (window.location.href = `/${quizId}`)}
          className="w-full"
        >
          もう一度挑戦する
        </Button>
      </CardFooter>
    </Card>
  );
}
