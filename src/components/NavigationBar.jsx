//NPM Packages
import {Link} from "react-router-dom";

//Project files
import SearchBar from './SearchBar';
import mapLogo from "../assets/images/map.svg";

export default function NavigationBar() {
    return (
      <nav id="navigation-bar">
        <Link to="/">
          <h1>Ptracker</h1>
        </Link>

        <SearchBar />

        <div className="flexbox-expand-space" />

        <Link to="/track">
          <img
            className="map-logo"
            src={mapLogo}
            title="Track Map"
            style={{height: "30px"}}
          />
        </Link>
      </nav>
    );
}

