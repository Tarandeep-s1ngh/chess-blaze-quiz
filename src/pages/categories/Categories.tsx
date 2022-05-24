import { Link } from "react-router-dom";
import { chessH1 } from "../../assets";

export const Categories = () => {
  return (
    <main className="main-wrapper">
      <section className="categories">
        <h3 className="h3 text-center">
          <span className="span-hover">Categories</span>
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
