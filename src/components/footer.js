import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containernav">
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
