import { Question } from '../contexts';
import { OptionButton } from './OptionButton';

export const QuizCard = ({
  alreadySelect,
  onNext,
  question,
}: {
  onNext(): void;
  alreadySelect: boolean;
  question?: Question;
}) => {
  if (!question) return null;
  return (
    <div className="flex flex-col">
      <div>
        {question.flag && <img src={question.flag} width={120} height={52} />}
        <div className="text-xl font-bold mt-4">{question.question}</div>
        <div className="flex flex-col space-y-4 mt-4">
          {question.options.map((option, index) => (
            <OptionButton
              opt={option}
              index={index}
              key={`Option__${option.label}`}
            />
          ))}
        </div>
      </div>
      {alreadySelect && (
        <button
          onClick={onNext}
          className="bg-brand-yellow text-white font-bold text-lg py-2 px-6 self-end mt-4 rounded-2xl transition-all"
        >
          Next
        </button>
      )}
    </div>
  );
};
