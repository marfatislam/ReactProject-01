import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="navbar-bg">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React-App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <form className="d-flex">
                <button className="btn btn-style" type="submit">
                  Sign Up
                </button>
                <button
                  className="btn btn-style btn-style-border"
                  type="submit"
                >
                  Log In
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
