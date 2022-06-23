import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="navbar-bg">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <a class="navbar-brand" href="#">
            React-App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <form class="d-flex">
                <button class="btn btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn btn-style btn-style-border" type="submit">
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
