//NPM Packages
import React from 'react';
import {Link} from "react-router-dom";
//Project files
// import logo from '../assets/images/logo.svg'

export default function NavigationBar() {
    return (
      <nav id="navigation-bar">
        <Link to="/" style={{textDecoration: 'none', color: 'white', fontWeight: 'bolder',}}>
        {/* <Link style={{ color: "white" }}> */}
          <h1 style={{fontSize:"20px"}}>
            {" "}
            <span style={{fontFamily: 'cursive'}}>P</span>tracker
          </h1>
          {/* <img src={logo} alt="P-tracker logo" title="P-tracker logo" /> */}
        </Link>
      </nav>
    );
}

