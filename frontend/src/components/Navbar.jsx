import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
          Frank’s Freshway Market
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#8d8d8d" }}>Home</Link>
        </li>
        <li>
          <Link to="/catalog" style={{ textDecoration: "none", color: "#8d8d8d" }}>Shop</Link>
        </li>
        <li>
          <Link to="/weekly" style={{ textDecoration: "none", color: "#8d8d8d" }}>Weekly Circular</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#8d8d8d" }}>About Us</Link>
        </li>
        <li>
          <Link to="/departments" style={{ textDecoration: "none", color: "#8d8d8d" }}>Departments</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none", color: "#8d8d8d" }}>Contact</Link>
        </li>
      </ul>
      <div>
        <input
          className="navbar-search"
          type="text"
          placeholder="Search"
        />
      </div>
    </nav>
  );
}