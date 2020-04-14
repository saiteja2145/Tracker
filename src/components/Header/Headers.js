import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import image from "../../images/image.png";
const Headers = () => {
  return (
    <div className="headerContainer">
      <ul className="list">
        <li className="navLinks">
          <img src={image} alt="Icon" className="iconNew link" />
        </li>
        <li className="navLinks">
          <NavLink to="/" className="link" exact activeClassName="activeClass">
            Global
          </NavLink>
        </li>
        <li className="navLinks">
          <NavLink to="/india" className="link" activeClassName="activeClass">
            India
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Headers;
