import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="h3 nav-txt">
        <Link to="/">
          <i className="nav-logo fa-solid fa-chess"></i>Chess Blaze
        </Link>
      </div>
      <Link to="/" className="icon-in-nav">
        <i className="fas fa-search"></i>
      </Link>
      <Link to="/categories" className="icon-in-nav">
        <i className="fas fa-clipboard-list"></i>
      </Link>
      <Link to="/login" className="icon-in-nav">
        <i className="fa-solid fa-user"></i>
      </Link>
      <Link to="" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
