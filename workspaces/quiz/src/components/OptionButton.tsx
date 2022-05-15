import clsx from 'clsx';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { QuestionOption, useQuiz } from '../contexts';
import { parseSubject } from '../utils';

type OptionButtonProps = {
  opt: QuestionOption;
  index: number;
};

export function OptionButton({ opt, index }: OptionButtonProps) {
  const { state, dispatch } = useQuiz();
  const { selectedAnswer, alreadySelect } = state;
  const selected = selectedAnswer?.label === opt.label;
  const displayCorrect = alreadySelect && opt.correct;
  const displayWrong = alreadySelect && selected && !opt.correct;
  return (
    <button
      onClick={() => {
        dispatch({ type: 'quiz/selectAnswer', payload: opt });
      }}
      disabled={alreadySelect}
      className={clsx(
        'flex items-center border-4 p-3 rounded-2xl transition-colors hover:text-brand-white hover:bg-brand-yellow hover:border-brand-yellow disabled:cursor-not-allowed',
        [
          displayCorrect
            ? 'bg-brand-green hover:bg-brand-green hover:border-brand-green border-brand-green text-brand-white'
            : displayWrong
            ? 'bg-brand-red hover:bg-brand-red hover:border-brand-red border-brand-red text-brand-white'
            : 'border-brand-puple text-brand-puple',
        ]
      )}
    >
      <span className="font-medium text-xl">{parseSubject[index]}</span>
      <span className="ml-2 text-lg">{opt.label}</span>
      <span className="ml-auto">
        {displayCorrect && <BsCheckCircleFill size={24} />}
        {displayWrong && <BsXCircleFill size={24} />}
      </span>
    </button>
  );
}
