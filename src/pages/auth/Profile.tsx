import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { logout } from "../../utils";

export const Profile = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">User Profile</h2>

        <div className="divider divider-a divider-b-full"></div>

        <section className="quiz-content">
          <div className="profile-details">
            <div>
              <span className="semibold">Full Name: </span>
              <span> User</span>
            </div>

            <div>
              <span className="semibold">Email: </span>
              <span>ipsumlorem@email.com</span>
            </div>

            <div>
              <span className="semibold">Mobile No: </span>
              <span>+91 9128****68</span>
            </div>

            <div className="flex-row gap0p3">
              <span className="semibold">Address: </span>
              <address> Lorem ipsum, dolor sit amet consectetur elit.</address>
            </div>
          </div>

          <button
            onClick={() => logout({ setUser, navigate })}
            className="btn-primary next-quest btn-login"
          >
            Log Out ◀
          </button>
          <Link to="/" className="btn-primary next-quest btn-home">
            Deactivate My Account
          </Link>
        </section>
      </div>
    </main>
  );
};
