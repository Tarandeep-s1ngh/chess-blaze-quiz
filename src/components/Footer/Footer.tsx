import "../Navbar/navbar.css";

export const Footer = () => {
  return (
    <footer>
      <span className="right-footer">
        <a
          className="link"
          href="mailto: taran.s1608@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-at"></i>
        </a>

        <a
          className="link"
          href="https://github.com/Tarandeep-s1ngh "
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </span>
      <span className="left-footer">
        <a
          className="link"
          href="https://twitter.com/Tarandeep_s1ngh"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/tarandeep-s1ngh/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </span>
    </footer>
  );
};
