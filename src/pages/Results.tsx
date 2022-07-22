import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export const Results = () => {
  // const { quizId } = useParams();

  const { quizDispatch, quizState } = useQuiz();

  const { currQuiz, userAnswer } = quizState;

  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    let currentScore = 0;
    quizState.currQuiz.forEach(({ answerIndex }, index) => {
      if (answerIndex === userAnswer[index]) {
        currentScore += 10;
      }
    });
    setQuizScore(currentScore);
  }, [quizState.currQuiz, userAnswer]);

  const isCorrect = ({
    correctAnswer,
    selectedAnswer,
    optionIndex,
  }: {
    correctAnswer: number;
    selectedAnswer: number;
    optionIndex: number;
  }) => {
    if (correctAnswer === optionIndex)
      return "btn-primary hover-none quiz-correct";
    else if (selectedAnswer === optionIndex)
      return "btn-primary hover-none quiz-wrong";
    else return "btn-primary hover-none";
  };

  let optionStyle: string;

  return (
    <main className="quiz-wrapper max-w-60">
      <h2 className="h2 text-center">Results</h2>

      <hr />

      <h4 className="h4 text-center">Your Final Score is : {quizScore}/50</h4>

      <hr />
      <br />

      {currQuiz.map((question, idx) => {
        return (
          <div key={idx}>
            <section className="quiz-header">
              <span>Question: {idx + 1}/5</span>
              <span className="highlight-color bold">
                Score:{" "}
                {question.answerIndex === userAnswer[idx]
                  ? "10"
                  : userAnswer[idx] === -1
                  ? "No option selected"
                  : "0"}
              </span>
            </section>

            <section className="quiz-content">
              <div className="quiz-quest semibold t1p5">
                {question.question}
              </div>
              {question.options.map((option, index) => {
                optionStyle = isCorrect({
                  correctAnswer: question.answerIndex,
                  selectedAnswer: userAnswer[idx],
                  optionIndex: index,
                });
                return (
                  <button key={index} className={optionStyle}>
                    {option}
                  </button>
                );
              })}
            </section>
            {idx !== currQuiz.length - 1 && (
              <>
                <br />
                <br />
                <hr />
                <br />
                <br />
              </>
            )}
          </div>
        );
      })}

      {/* <button className="btn-primary next-quest btn-home">Share Quiz 📤</button> */}
      <br />
      <br />
      <Link
        to="/"
        className="btn-primary next-quest btn-home"
        onClick={() => {
          quizDispatch({
            type: "RESET",
          });
        }}
      >
        Back to Home 🏠
      </Link>
    </main>
  );
};
