import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbarCenter nav justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-dark navbarCenter ">
          <NavLink className="navbar-brand mr-5" to="#">
            Resume<span className="text-danger">.DanielMahmoodi</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-5">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/WorkExperience"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Work experiences
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="/DesignedSites">
                    Designed sites
                  </NavLink>
                  <NavLink className="dropdown-item" to="/OngoingSites">
                    Ongoing sites
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Links">
                  Links
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
