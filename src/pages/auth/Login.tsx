import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import { login } from "../../utils";

export const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const { setUser } = useAuth();

  const handleLogin = (isGuestLogin?: boolean) => {
    isGuestLogin
      ? login({
          credentials: {
            email: "test123@gmail.com",
            password: "test123",
          },
          setUser,
          navigate,
        })
      : login({ credentials: userDetails, setUser, navigate });
  };

  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Login</h2>

        <div className="divider divider-a"></div>

        <section className="quiz-content">
          <form action="" className="input-validation">
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

            <span className="input-span">
              <Link to="/forgot" className="input-validation-link">
                Forgot password?
              </Link>
              <div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </span>
          </form>

          <div>
            <button
              onClick={() => handleLogin()}
              className="btn-primary next-quest btn-login guest-login"
            >
              Login ▶
            </button>
            <button
              onClick={() => handleLogin(true)}
              className="btn-primary next-quest btn-login guest-login"
            >
              Guest Login ▶
            </button>
          </div>

          <div className="text-center mt-1">
            Not a user yet? &nbsp;
            <Link to="/signup" className="input-validation-link">
              Create an account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
