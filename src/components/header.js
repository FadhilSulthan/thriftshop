import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="containernav">
        <img className="logo" src="logo.png" alt="logo" />
        {/* navlink untuk berpindah route/halaman */}
        <NavLink to="/home" className="navbar">
          Home
        </NavLink>
        <NavLink to="/explore" className="navbar">
          Explore
        </NavLink>
        <NavLink to="/apparel" className="navbar">
          Apparel
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
      </div>
    </div>
  );
}
