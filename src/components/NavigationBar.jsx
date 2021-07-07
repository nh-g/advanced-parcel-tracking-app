//NPM Packages
import React from 'react';
import {Link} from "react-router-dom";
//Project files
// import logo from '../assets/images/logo.svg'
// import mapPin from '../assets/images/map-pin.png'
import SearchBar from './SearchBar';
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

        <SearchBar />

        <div className="flexbox-expand-space" />

        <Link
          to="/track"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <img src="https://img.icons8.com/ios/50/000000/map--v2.png"             style={{ width: "20px", height: "20px"}}
            title="Track Map"/>
          {/* <img src={mapPin} style = {{width: "20px", height: "20px"}} title="Track Map"/>  */}
        </Link>
      </nav>
    );
}

