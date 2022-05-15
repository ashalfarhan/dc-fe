import { QuizAction, QuizState } from './types';

export const quizInitialState: QuizState = {
  alreadySelect: false,
  done: false,
  currentStep: 0,
  questions: [],
  score: 0,
  selectedAnswer: null,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'quiz/nextQuestion':
      return {
        ...state,
        selectedAnswer: null,
        alreadySelect: false,
        currentStep: state.currentStep + 1,
        done: state.currentStep === state.questions.length - 1,
      };
    case 'quiz/selectAnswer':
      return {
        ...state,
        selectedAnswer: action.payload,
        alreadySelect: true,
        score: state.score + (action.payload?.correct ? 1 : 0),
      };
    case 'quiz/loadQuestions':
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
}
