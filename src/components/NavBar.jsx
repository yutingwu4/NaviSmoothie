/**
 * @name NavBar
 * @desc Navbar component that shows on each page.
 */

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <li className="customLink title">Navi's Smoothies</li>
      <ul className="navBarLinks">
        <li className="list-inline-item">
          <Link className="customLink" to="/NaviSmoothie/">
            View All
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="customLink" to="/SmoothieForm">
            Create New
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
