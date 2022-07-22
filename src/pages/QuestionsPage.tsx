import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { getSingleQuizData, LocalRoutes } from "../utils";

export const QuestionsPage = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const { quizDispatch, quizState } = useQuiz();
  const { currQuiz, currQuestionNumber } = quizState;
  useEffect(() => {
    (async () => {
      if (quizId) {
        await getSingleQuizData({ quizId, dispatch: quizDispatch });
      }
    })();
  }, [quizId, quizDispatch]);

  const [selectedOption, setSelectedOption] = useState(-1);

  const nextQuestionHandler = () => {
    quizDispatch({
      type: "UPDATE_CURRENT_QUESTION_NO",
      payload: { currQuestionNo: currQuestionNumber + 1 },
    });
    quizDispatch({
      type: "UPDATE_USER_ANSWER",
      payload: { newAnswer: selectedOption },
    });
    setSelectedOption(-1);
  };

  const submitQuizHandler = () => {
    quizDispatch({
      type: "UPDATE_USER_ANSWER",
      payload: { newAnswer: selectedOption },
    });
    navigate(`${LocalRoutes.RESULTS}/${quizId}`);
    setSelectedOption(-1);
  };
  return (
    <main className="quiz-wrapper max-w-70">
      <section className="quiz-header">
        <span>Question: {currQuestionNumber + 1}/5</span>
        <span className="highlight-color lightbold">Timer: 30s</span>
        <span>Score: 0</span>
      </section>

      {currQuiz.length && (
        <section className="quiz-content">
          {quizId === "rKcI3VhaWTabDGj4Wr4W" && (
            <div className="flex justify-center">
              <img
                src={currQuiz[currQuestionNumber].imageUrl}
                alt=""
                height="400px"
                width="400px"
              />
            </div>
          )}
          <div className="quiz-quest semibold t1p5">
            {currQuiz[currQuestionNumber].question}
          </div>

          {currQuiz[currQuestionNumber].options?.map((option, idx) => (
            <div key={idx}>
              <label htmlFor={`option${idx}`}>
                <input
                  type="radio"
                  id={`option${idx}`}
                  name="option"
                  checked={selectedOption === idx}
                  onChange={() => {
                    setSelectedOption(idx);
                  }}
                />
                <span className="btn-primary option-btn dis-inline-block text-center">
                  {option}
                </span>
              </label>
            </div>
          ))}
        </section>
      )}
      <section className="quiz-content">
        {currQuestionNumber === currQuiz.length - 1 ? (
          <button
            onClick={submitQuizHandler}
            className="btn-primary next-quest"
          >
            Submit
          </button>
        ) : (
          <button
            className="btn-primary next-quest"
            onClick={nextQuestionHandler}
          >
            Next ▶
          </button>
        )}

        <Link to="/" className="btn-primary next-quest btn-home">
          Quit 🛑
        </Link>
      </section>
    </main>
  );
};
