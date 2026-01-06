import React from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const items = ["home", "category", "reporter", "about", "contact"];

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {items.map((item) => (
              <li key={item} className="nav-item">
                <button
                  className="nav-link text-light"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;