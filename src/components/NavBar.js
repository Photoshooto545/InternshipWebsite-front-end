import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="PhotoShooto" />
          </Link>
        </div>
        <div className="navLinks">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/programs">
            Programs
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="navUser">
          <NavLink to="/login" className="loginInBtn">
            Login
          </NavLink>
          <NavLink to="/signup" className="signInLink">
            Create New Account?
          </NavLink>
        </div>
      </div>
    </div>
    // <div className="navContainer">
    // </div>

  );
};

export default NavBar;
