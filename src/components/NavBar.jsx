import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand" end>
          <span className="brand-mark">🎬</span>
          <span className="brand-text">
            <strong>ChanduJeevan</strong>
            <small>Movie Explorer</small>
          </span>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => `navbar-link${isActive ? " active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => `navbar-link${isActive ? " active" : ""}`}>
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;