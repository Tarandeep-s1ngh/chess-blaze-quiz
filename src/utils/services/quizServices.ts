import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../..";
import { QuizAction } from "../../types";

export const getQuizCategories = async () => {
  const quizCategoriesSnapShot = await getDocs(collection(db, "categories"));

  const categoriesArr: { categData: DocumentData; categId: string }[] = [];

  quizCategoriesSnapShot.forEach((category) => {
    if (category.exists()) {
      categoriesArr.push({ categData: category.data(), categId: category.id });
    }
  });
  return categoriesArr;
};

export const getSingleQuizData = async ({
  quizId,
  dispatch,
}: {
  quizId: string;
  dispatch: Dispatch<QuizAction>;
}) => {
  const quizDataSnapShot = await getDoc(doc(db, `quizzes/${quizId}`));
  const data = quizDataSnapShot.data();

  dispatch({
    type: "UPDATE_CURRENT_QUESTION_NO",
    payload: { currQuestionNo: 0 },
  });
  dispatch({
    type: "UPDATE_QUIZ_QUESTIONS",
    payload: { newQuiz: data?.currentQuiz },
  });
};
