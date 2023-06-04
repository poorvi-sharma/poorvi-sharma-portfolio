import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3 navbar-light navbardiv">
      <Link className="navbar-brand " exact to="/">
        <span className="navtitle">Poorvi Sharma</span>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse pt-1 fortext ${
          isNavbarOpen ? "show" : ""
        }`}
      >
        <ul className="navbar-nav mr-auto ull ">
          <li className="nav-item">
            <NavLink className="nav-link col1" exact to="/About">
              <p className="hove">About</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link col1" exact to="/Project">
              <p className="hove">Projects</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link col1" exact to="/ContactPage">
              <p className="hove">Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
