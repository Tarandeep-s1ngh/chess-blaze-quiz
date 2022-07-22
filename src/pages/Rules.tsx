import { Link, useParams } from "react-router-dom";

export const Rules = () => {
  const params = useParams();

  return (
    <main className="main-wrapper">
      <div className="rules">
        <h2 className="h2 text-center">RULES</h2>
        <p className="rule-item">
          ⭐ For each correct answer, you get 10 points
        </p>
        <p className="rule-item">
          ⭐ Each multiple choice question has only one correct answer
        </p>
        <p className="rule-item">
          ⭐ To win the quiz you need to score more than 70%
        </p>
        <p className="rule-item">
          ⭐ You have to answer the question in the given time frame
        </p>
        <Link
          to={`/questionspage/${params.quizId}`}
          className="btn-primary text-center"
        >
          Start Quiz
        </Link>
      </div>
    </main>
  );
};
