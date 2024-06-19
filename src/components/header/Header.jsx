import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/the meal logo_white.svg";

import "./ui/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link className="link" to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div className="header__"></div>
      </div>
    </div>
  );
}

export default Header;
