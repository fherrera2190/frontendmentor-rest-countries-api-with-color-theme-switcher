import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header >
      <div className="navbar">
        <Link to="/" className="nav-link">
          <div className="title">Where is the World?</div>
        </Link>
        <div className="mode">
          <i className="fa-solid fa-moon"></i>
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};
