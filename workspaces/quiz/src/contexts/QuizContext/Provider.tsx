import { FC, useReducer } from 'react';
import { QuizContext } from './QuizContext';
import { quizInitialState, quizReducer } from './reducer';

export const QuizProvider: FC = props => {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState);
  return <QuizContext.Provider value={{ state, dispatch }} {...props} />;
};
