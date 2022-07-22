// Category
// Questions
// options
// user selected answer
// Real answer

import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";
import { DefaultQuizContext } from "../types/quiz";
import { quizInitialState } from "../utils";

const QuizContext = createContext<DefaultQuizContext>({
  quizState: quizInitialState,
  quizDispatch: () => {},
});

export const QuizProvider = ({ children }: { children: JSX.Element }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
