import { Dispatch } from 'react';

export type QuizState = {
  currentStep: number;
  score: number;
  selectedAnswer: QuestionOption | null;
  questions: Question[];
  alreadySelect: boolean;
  done: boolean;
};

export type QuestionOption = {
  label: string;
  correct: boolean;
  id: string;
};

export type Question = {
  id: string;
  question: string;
  flag?: string;
  options: QuestionOption[];
};

export type QuizContextValues = {
  state: QuizState;
  dispatch: Dispatch<QuizAction>;
};

export type QuizAction =
  | {
      type: 'quiz/nextQuestion';
    }
  | {
      type: 'quiz/selectAnswer';
      payload: QuestionOption | null;
    }
  | {
      type: 'quiz/loadQuestions';
      payload: Question[];
    };
