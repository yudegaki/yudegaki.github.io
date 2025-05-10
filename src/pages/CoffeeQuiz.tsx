import Quiz from '@/components/quiz/quiz-start';
import StyleContainer from '@/components/style-container';

const CoffeeQuizStartScreen = () => {
  return (
    <StyleContainer>
      <Quiz
        quizTopic="coffeequiz"
        title="コーヒーインストラクター検定2級 対策問題"
        description={
          'コーヒーインストラクター検定2級レベルのクイズを出題します。\n' +
          '問題数は1~20問まで選択できます。'
        }
      />
    </StyleContainer>
  );
};

export default CoffeeQuizStartScreen;
