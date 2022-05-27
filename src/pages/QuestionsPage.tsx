import { QuestionCard } from "../components";

export const QuestionsPage = () => {
  return (
    <main className="quiz-wrapper">
      <QuestionCard />

      <section className="quiz-content">
      <button className="btn-primary next-quest">Next ▶</button>
      <button className="btn-primary next-quest btn-home">Home 🏠</button>
      </section>
    </main>
  );
};
