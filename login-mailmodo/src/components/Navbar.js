import React from "react";
import { NavLink, Link } from "react-router-dom";
import mailmodo from "../mailmodo.png";
import "../index.css";
const Navbar = () => {
  return (
    <div className="navbar-top">
      <Link to="/">
        <img className="logo-image" src={mailmodo} alt="Mailmodo Logo" />
      </Link>
      <ul className="list-items">
        <li>
          <NavLink to="/login">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
