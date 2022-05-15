import { useContext } from 'react';
import { QuizContext } from './QuizContext';

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('"useQuiz" should be called inside "QuizProvider"');
  }
  return context;
};
