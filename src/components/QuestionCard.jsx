export const QuestionCard = () => {
  return (
    <>
      <section className="quiz-header">
        <span>Question: 1/5</span>
        <span className="highlight-color lightbold">Timer: 30s</span>
        <span>Score: 0</span>
      </section>

      <section className="quiz-content">
        <div className="quiz-quest semibold t1p5">
          Where was chess invented?
        </div>

        <button className="btn-primary">Japan</button>
        <button className="btn-primary">India</button>
        <button className="btn-primary">China</button>
        <button className="btn-primary">Australia</button>
      </section>
    </>
  );
};
