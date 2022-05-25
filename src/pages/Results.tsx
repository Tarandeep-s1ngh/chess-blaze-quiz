export const Results = () => {
  return (
    <main className="quiz-wrapper">
      <h2 className="h2 text-center">Results</h2>

      <hr />

      <h4 className="h4 text-center">Your Final Score is : 10/20</h4>

      <hr />
      <br />

      <section className="quiz-header">
        <span>Question: 1/2</span>
        <span className="highlight-color bold">Score: 0</span>
      </section>

      <section className="quiz-content">
        <div className="quiz-quest semibold t1p5">
          Where was chess invented?
        </div>

        <button className="btn-primary">Japan</button>
        <button className="btn-primary quiz-correct">India</button>
        <button className="btn-primary quiz-wrong">China</button>
        <button className="btn-primary">Australia</button>
      </section>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <section className="quiz-header">
        <span>Question: 2/2</span>
        <span className="highlight-color bold">Score: 1</span>
      </section>

      <section className="quiz-content">
        <div className="quiz-quest semibold t1p5">
          Where was chess invented?
        </div>

        <button className="btn-primary">Japan</button>
        <button className="btn-primary quiz-correct">India</button>
        <button className="btn-primary">China</button>
        <button className="btn-primary">Australia</button>
      </section>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <button className="btn-primary next-quest btn-home">Share Quiz 📤</button>
      <br />
      <button
        className="btn-primary next-quest btn-home"
      >
        Back to Home 🏠
      </button>
    </main>
  );
};
