import { useNavigate } from "react-router-dom";
import { useAuth, useQuiz } from "../../context";
import { logout } from "../../utils";

export const Profile = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { quizDispatch } = useQuiz();
  return (
    <main className="main-wrapper mt-4">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">User Profile</h2>

        <div className="divider divider-a divider-b-full"></div>

        <section className="quiz-content mt-1">
          <div className="profile-details mt-1">
            <div>
              <span className="semibold">Username: </span>
              <span> Test User</span>
            </div>

            <div>
              <span className="semibold">Email: </span>
              <span>test123@gmail.com</span>
            </div>
          </div>

          <button
            onClick={() => {
              logout({ setUser, navigate });
              quizDispatch({
                type: "RESET",
              });
            }}
            className="btn-primary next-quest btn-login pointer"
          >
            Log Out ◀
          </button>
        </section>
      </div>
    </main>
  );
};
