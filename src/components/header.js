import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <img className="logo" src="logo.png" alt="logo" />
        <h2 className="title">Thrift Shop</h2>
      </div>
    </div>
  );
}
