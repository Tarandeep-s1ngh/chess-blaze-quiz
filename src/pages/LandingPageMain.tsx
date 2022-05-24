import { Link } from "react-router-dom";
import { chessHero, chessH1 } from "../assets";

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

      <section className="categories">
        <h3 className="h3 text-center">
          <Link to="/categories">Categories</Link>
        </h3>

        <div className="category-cards">
          <div className="card-badge">
            <div className="card-header">
              <img
                className="img-responsive"
                src={chessH1}
                alt="naruto themed notebook"
              />
              <div className="card-header-txt">
                <h3 className="semibold highlight-color mt-0p5">
                  History of Chess
                </h3>
                <small className="gray-color">Medium</small>
              </div>
            </div>
            <div className="card-price">
              <span className="final-price">
                Do you know where was chess invented? Then, this quiz is for
                you!
              </span>
            </div>
            <Link to="/rules" className="btn-primary btn-outline text-center">
              Dive In
            </Link>
          </div>

          <div className="card-badge">
            <div className="card-header">
              <img
                className="img-responsive"
                src={chessH1}
                alt="naruto themed notebook"
              />
              <div className="card-header-txt">
                <h3 className="semibold highlight-color mt-0p5">
                  Chess in India
                </h3>
                <small className="gray-color">Easy</small>
              </div>
            </div>
            <div className="card-price">
              <span className="final-price">
                Do you know who Vishy Anand is? Then, this quiz is for you!
              </span>
            </div>
            <Link to="/rules" className="btn-primary btn-outline text-center">
              Dive In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
