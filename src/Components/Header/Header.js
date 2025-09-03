import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-bar">
      <div className="left-logo">
        <img src="/images/logo.png" alt="Deep Net Soft" className="logo-img"/>
        {/* <span className="logo-text"> <span className="soft">SOFT</span></span> */}
      </div>
      <nav>
        <a href="#">HOME</a>
        <a href="#" className="active">MENU</a>
        <a href="#">MAKE A RESERVATION</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}
export default Header;
