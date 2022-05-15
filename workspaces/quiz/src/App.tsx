import { QuizCard, Corner, WinCard, Card } from './components';
import { useQuiz } from './contexts';
import { useGetRandomCountriesQuery } from './graphql';
import { generateQuestion } from './utils';
import { ImSpinner8 } from 'react-icons/im';

function App() {
  const { dispatch, state } = useQuiz();
  const { loading } = useGetRandomCountriesQuery({
    variables: { limit: 4 },
    onCompleted: data => {
      if (!data.getRandomCountries || !data.getRandomCountries?.length) return;
      dispatch({
        type: 'quiz/loadQuestions',
        payload: generateQuestion(data.getRandomCountries),
      });
    },
  });
  const currentQuestion = state.questions[state.currentStep];
  const handleNextQuestion = () => {
    dispatch({ type: 'quiz/nextQuestion' });
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen flex-col">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">COUNTRY QUIZ</h1>
        <Card className="rounded-3xl p-8 flex flex-col">
          <Corner className="absolute -top-20 right-0" width={140} />
          {loading ? (
            <ImSpinner8 className="animate-spin w-16 h-16 m-auto" />
          ) : (
            <QuizCard
              alreadySelect={state.alreadySelect}
              onNext={handleNextQuestion}
              question={currentQuestion}
            />
          )}
          {state.done && <WinCard score={state.score} />}
        </Card>
      </div>
    </div>
  );
}

export default App;
