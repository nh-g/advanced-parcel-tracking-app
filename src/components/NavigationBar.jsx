//NPM Packages
import React from 'react';
import {Link} from "react-router-dom";
//Project files
// import logo from '../assets/images/logo.svg'

export default function NavigationBar() {
    return (
      <nav id="navigation-bar">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
            Ptracker
          </h1>
        </Link>

        <div className="flexbox-expand-space" />

        <Link
          to="/track"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          Map
        </Link>
      </nav>
    );
}

