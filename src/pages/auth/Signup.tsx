import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../utils";
import { useAuth } from "../../context";

export const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<{
    userName: string;
    email: string;
    password: string;
  }>({ userName: "", email: "", password: "" });
  const { setUser } = useAuth();

  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Sign Up</h2>

        <div className="divider divider-a" />

        <section className="quiz-content">
          <form action="" className="input-validation">
            <label htmlFor="username"></label>
            <input
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  userName: e.target.value,
                }))
              }
              value={userDetails.userName}
              id="username"
              type="text"
              placeholder="Enter Your Name"
              required
            />

            <label htmlFor="email-input"></label>
            <input
              onChange={(e) =>
                setUserDetails((prev) => ({ ...prev, email: e.target.value }))
              }
              id="email-input"
              value={userDetails.email}
              type="email"
              placeholder="Enter Email"
              required
            />

            <label htmlFor="password"></label>
            <input
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              id="password"
              value={userDetails.password}
              type="password"
              placeholder="Enter Password"
              required
            />

            <span>
              Already registered?{" "}
              <Link to="/login" className="input-validation-link">
                Login here
              </Link>
            </span>
          </form>

          <button
            onClick={() =>
              signup({ credentials: userDetails, setUser, navigate })
            }
            className="btn-primary next-quest btn-login"
          >
            Sign Up <i className="fa-solid fa-circle-chevron-right"></i>
          </button>

          <Link
            to="/"
            className="btn-primary next-quest btn-home dis-inline-block"
          >
            Home <i className="fa-solid fa-house"></i>
          </Link>
        </section>
      </div>
    </main>
  );
};
