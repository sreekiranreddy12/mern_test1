import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h2 className="navbar-brand">Disaster Management</h2>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link> {/* ✅ Correct Link */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
