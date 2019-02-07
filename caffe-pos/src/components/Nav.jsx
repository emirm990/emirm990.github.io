import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Some logo
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link " href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
