import React from "react";
import {
  Link,
  NavLink,
} from 'react-router-dom'
import "./stylesheets/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div id="nav-wrapper">
          <div>


          <Link to='/' id="nav-icons-and-text">
            <img src="/favicon.png" alt="logo" />
            <div id="website-name">Fine - Track</div>
          </Link>
          </div>
          <div id="nav-list">
            <ul type="none">
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/use/">How to use</Link>
              </li>
              <li className="flex">
                <Link to="/login/">Login</Link>
                <span> &nbsp;/&nbsp; </span>
                <Link to="/Signup/">Sign&nbsp;Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
