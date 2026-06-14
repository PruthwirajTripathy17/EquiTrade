import React from "react";
import {Link} from 'react-router-dom';
import { DASHBOARD_URL } from "../config";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom py-0"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/Images/EquiTrade_logo.png"
            style={{ height: "60px", width: "auto", display: "block" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" role="search">
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"href={`${DASHBOARD_URL}/signup`}>
                  Signup
                </a>
              </li> 
              {/* <li className="nav-item">
                <a className="nav-link active" href={DASHBOARD_URL}>
                  Dashboard
                </a>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
