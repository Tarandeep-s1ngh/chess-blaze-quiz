import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, PrivateRoute } from "./components";
import {
  CategoriesPage,
  Forgot,
  LandingPageMain,
  Login,
  Profile,
  QuestionsPage,
  Results,
  Rules,
  Signup,
} from "./pages";

import "./App.css";
import { LocalRoutes } from "./utils";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={LocalRoutes.HOME} element={<LandingPageMain />} />
        <Route element={<PrivateRoute />}>
          <Route path={LocalRoutes.CATEGORIES} element={<CategoriesPage />} />
          <Route
            path={LocalRoutes.QUESTIONS_PAGE}
            element={<QuestionsPage />}
          />
          <Route path={LocalRoutes.RULES} element={<Rules />} />
          <Route
            path={`${LocalRoutes.RESULTS}/:quizId`}
            element={<Results />}
          />
          <Route path={LocalRoutes.PROFILE} element={<Profile />} />
        </Route>

        <Route element={<PrivateRoute isAuthRoute={true} />}>
          <Route path={LocalRoutes.LOGIN} element={<Login />} />
          <Route path={LocalRoutes.SIGNUP} element={<Signup />} />
          <Route path={LocalRoutes.FORGOT} element={<Forgot />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
