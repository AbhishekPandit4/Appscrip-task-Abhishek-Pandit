import React from "react";
import "../Header/Header.css";
import Logo from "./images/Logo.png";
import midelLogo from "./images/midel-img.png";
import serch from "./images/search-normal.png";
import Vector from "./images/Vector.png";
import shoppingBag from "./images/shopping-bag.png";
import profile from "./images/profile.png";
import Language from "./images/Language.png";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <div className="main-header">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="menu">
            <img src={midelLogo} />
          </div>
          <div className="icons">
            <span>
              {" "}
              <img src={serch} />{" "}
            </span>
            <span>
              <img src={Vector} />
            </span>
            <span>
              <img src={shoppingBag} />
            </span>
            <span>
              <img src={profile} />
            </span>
            <span>
              <img src={Language} />
            </span>
          </div>
        </div>
        <div className="main-menu">
          <div className="menu">
            <a href="#shop">SHOP</a>
            <a href="#skills">SKILLS</a>
            <a href="#stories">STORIES</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT US</a>
          </div>
        </div>
        
      </header>
    </>
  );
}
