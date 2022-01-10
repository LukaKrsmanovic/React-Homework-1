import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="white z-depth-0">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          <div style={({ backgroundColor: "red" }, { width: "64px" })}>
            <img src="./images/blog-logo.png" alt="logo" width="100%" />
          </div>
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/add-post" className="waves-effect waves-light blue btn">
              Dodaj post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
