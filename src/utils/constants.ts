import { QuizState } from "../types";

export enum LocalRoutes {
  HOME = "/",
  CATEGORIES = "/categories",
  QUESTIONS_PAGE = "/questionspage/:quizId",
  RULES = "/rules/:quizId",
  RESULTS = "/results",
  LOGIN = "/login",
  PROFILE = "/profile",
  SIGNUP = "/signup",
  FORGOT = "/forgot",
}

export const quizInitialState: QuizState = {
  category: "",
  currQuiz: [],
  currQuestionNumber: -1,
  userAnswer: [],
};
