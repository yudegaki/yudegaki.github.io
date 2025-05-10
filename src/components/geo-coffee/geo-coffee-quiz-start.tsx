import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegionData } from "@/types/country";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { getAllRegionsData, getRegionDataById } from "@/lib/country";
import { getCountryQuizzesLengthById } from "@/lib/country-quiz";
import { GeoCoffeeQuiz } from "@/components/geo-coffee/geo-coffee-quiz";

const MIN_QUIZ_COUNT = 1;
const DEFAULT_QUIZ_COUNT = 10;
const MAX_QUIZ_COUNT = 20;

export const GeoCoffeeQuizStart = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [selectedRegion, setRegionSelected] = useState<RegionData | null>(null);
  const [quizCount, setQuizCount] = useState(DEFAULT_QUIZ_COUNT);

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegionId(regionId);
  };

  const handleStartQuiz = () => {
    const selectedRegion = getRegionDataById(selectedRegionId!);
    if (selectedRegion) {
      setRegionSelected(selectedRegion);
    }
  };
  if (selectedRegion) {
    return (
      <GeoCoffeeQuiz selectedRegion={selectedRegion} quizCount={quizCount} />
    );
  }

  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md md:max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center p-6 md:p-8">
          <CardTitle className="text-3xl md:text-3xl lg:text-4xl font-bold">
            コーヒー国当てクイズ
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-6 md:px-8 pb-8">
          <p className="mb-8 whitespace-pre-line text-lg md:text-lg">
            クイズを始める前に、学びたい地域と問題数を選択してください
          </p>

          <label className="text-lg md:text-xl font-medium">地域</label>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            {getAllRegionsData().map((region: RegionData) => (
              <Card
                key={region.id}
                className={`cursor-pointer transition-all ${
                  selectedRegionId === region.id
                    ? "border-primary border-2 shadow-md"
                    : "hover:border-primary/50 hover:shadow-sm"
                }`}
                onClick={() => handleRegionSelect(region.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    全{getCountryQuizzesLengthById(region.id)}問
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-4 mt-6">
            <label className="text-lg md:text-xl font-medium text-gray-700">
              問題数
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
            disabled={!selectedRegionId}
            onClick={handleStartQuiz}
            className="w-full max-w-xs text-xl md:text-2xl py-8 rounded-xl font-bold"
          >
            クイズをスタート
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
