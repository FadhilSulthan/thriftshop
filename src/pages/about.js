import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <img className="about-image" src="logo.png" alt="plant" />
      <div className="about-content">
        <h2 className="about-title">Thrift Shop</h2>
        <p className="about-title">
          Thrift Shop is a website that sells second-hand clothes. Our thrift
          shop sells sports wear and casual wear. We sell clothes from various
          brands such as Nike, Adidas, and Puma. We also sell clothes from
          various categories such as shoes, shirts, pants, and jackets. We sell
          clothes from various colors such as black, white, red, and blue. We
          sell clothes from various prices. This website is made for the final
          project of MDP practicum.
        </p>
      </div>
    </div>
  );
}
