import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img src="/images/Rectangle.png" alt="Menu Background" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h2 className="menu-title">MENU</h2>
        <p className="desc">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button below the menu.
        </p>
      </div>
    </section>
  );
}
export default Hero;
