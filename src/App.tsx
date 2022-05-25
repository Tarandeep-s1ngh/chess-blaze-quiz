import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  Categories,
  Forgot,
  HistoryQuiz,
  IndiaQuiz,
  LandingPageMain,
  Login,
  Profile,
  Results,
  Rules,
  Signup,
} from "./pages";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPageMain />} />
        <Route path="categories" element={<Categories />} />
        <Route path="indiaquiz" element={<IndiaQuiz />} />
        <Route path="historyquiz" element={<HistoryQuiz />} />
        <Route path="rules" element={<Rules />} />
        <Route path="results" element={<Results />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
