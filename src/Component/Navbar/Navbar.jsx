import React from "react";
import "../Navbar/Navbar.css";
import left from "../Navbar/Imegs/arrow-left.png";

export default function Navbar() {
  return (
    <navbar className="nav-container">
      <div className="nav-main-left">
        <div className="nav-left-text">
          <a>3425ITEMS</a>
          <img src={left} className="nav-left-img"/>
          &nbsp;
          <a className="nav-hide-btn">HIDEFILTER</a>
        </div>
        <div className="nav-hide-show-btn">
        
        </div>

        <select className="nav-dropdwon">
          <option value="option1">Recommended</option>
          <option value="option2">Newest first</option>
          <option value="option3">Popular</option>
          <option value="option3">Price : high to low</option>
          <option value="option3">Price : low to high</option>
        </select>
      </div>
    </navbar>
  );
}
