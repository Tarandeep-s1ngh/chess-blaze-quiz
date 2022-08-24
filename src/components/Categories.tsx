import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { chessH1 } from "../assets";
import { getQuizCategories } from "../utils";

export const Categories = () => {
  const [categState, setCategState] = useState<
    { categData: DocumentData; categId: string }[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getQuizCategories();
      setCategState(res);
    })();
  }, []);

  return (
    <section className="categories">
      <h3 className="h3 text-center bold">
        <Link to="/categories">Categories</Link>
      </h3>

      <div className="category-cards">
        {categState?.map(({ categData, categId }) => {
          return (
            categData.name !== "History Unfolds" && (
              <div className="card-badge" key={categId}>
                <div
                  onClick={() => {
                    navigate(`/rules/${categId}`);
                  }}
                  className="card-header"
                >
                  <img
                    className="img-responsive"
                    src={chessH1}
                    alt="quiz card"
                  />
                  <div className="card-header-txt">
                    <h3 className="semibold highlight-color mt-0p5">
                      {categData.name}
                    </h3>
                    <small className="gray-color">{categData.difficulty}</small>
                  </div>
                </div>
                <div className="card-price">
                  <span className="final-price">{categData.description}</span>
                </div>
                <Link
                  to={`/rules/${categId}`}
                  className="btn-primary btn-outline text-center"
                >
                  Dive In
                </Link>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};
