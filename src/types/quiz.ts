export type DefaultQuizContext = {
  quizState: QuizState;
  quizDispatch: React.Dispatch<QuizAction>;
};

export type QuestionState = {
  question: string;
  options: string[];
  answerIndex: number;
  imageUrl: string | undefined;
};

export type QuizState = {
  category: string;
  currQuiz: QuestionState[];
  currQuestionNumber: number;
  userAnswer: number[];
};

type currQuestionNumberAction = {
  type: "UPDATE_CURRENT_QUESTION_NO";
  payload: {
    currQuestionNo: number;
  };
};

type userAnswerAction = {
  type: "UPDATE_USER_ANSWER";
  payload: {
    newAnswer: number;
  };
};

type currQuizAction = {
  type: "UPDATE_QUIZ_QUESTIONS";
  payload: {
    newQuiz: QuestionState[];
  };
};

type resetAction = {
  type: "RESET";
};

export type QuizAction =
  | userAnswerAction
  | currQuestionNumberAction
  | currQuizAction
  | resetAction;

// interface ResetDatastate {
//   type: ActionType.RESET_DATASTATE;
//   payload: {
//     state: QuizState;
//   };
// }
