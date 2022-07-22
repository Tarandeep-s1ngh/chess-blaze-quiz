import { QuizAction, QuizState } from "../types";

export const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "UPDATE_CURRENT_QUESTION_NO":
      return {
        ...state,
        currQuestionNumber: action.payload.currQuestionNo,
      };
    case "UPDATE_USER_ANSWER":
      return {
        ...state,
        userAnswer: [...state.userAnswer, action.payload.newAnswer],
      };
    case "UPDATE_QUIZ_QUESTIONS":
      return {
        ...state,
        currQuiz: [...action.payload.newQuiz],
      };
    case "RESET":
      return {
        category: "",
        currQuiz: [],
        currQuestionNumber: -1,
        userAnswer: [],
      };
    default:
      return state;
  }
};
