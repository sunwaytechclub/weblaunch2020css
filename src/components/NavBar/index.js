import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "@/assets/svgs/logo.svg";
import hamburger from "@/assets/svgs/hamburger.svg";
import searchicon from "@/assets/svgs/searchbaricon.svg";

const NavBar = props => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} className="Nav-logo" alt="logo" />
      </Link>
      {props.todopage ? (
        <div className="Search">
          <img src={searchicon} className="SearchIcon" alt="searchicon" />
          <input type="text" className="Searchbar" placeholder="Search" />
        </div>
      ) : (
        <div>
          <div className="Nav-link">
            <Link to="/" className="Link">
              Home
            </Link>
            <Link className="Link">Benefits</Link>
            <Link className="Link">Pricing</Link>
            <Link className="Link">About Us</Link>
            <Link to="/todopage" className="Link Demo">
              Demo
            </Link>
          </div>
          <img src={hamburger} className="Hamburger" alt="Menu" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
