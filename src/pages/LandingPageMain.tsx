import { chessHero } from "../assets";
import { Categories } from "../components";

export const LandingPageMain = () => {
  return (
    <main className="main-wrapper">
      <section className="hero-section">
        <div className="hero-img">
          <img src={chessHero} alt="" className="img-responsive" />
        </div>
        <div className="hero-txt">
          <h1 className="h1 highlight-color">Chess Blaze</h1>
          <h2 className="h2 accent-color">The Blazing Chess Quiz</h2>
        </div>
      </section>

      <p className="main-txt mt-1">
        Welcome to the{" "}
        <span className="accent-color lightbold">blazing hot</span> chess quiz!
        You can test your knowledge if you are familiar with chess or you can
        learn some{" "}
        <span className="highlight-color lightbold">interesting facts</span> if
        you are a newbie! So what are you waiting for?{" "}
        <span className="accent-color lightbold">Let's Blaze!</span>
      </p>

      <hr />

      {/* =====  Categories  ====== */}

      <Categories />
    </main>
  );
};
