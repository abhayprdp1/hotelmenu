import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Connect With Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">CONNECT WITH US</h3>
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <span className="footer-text">+91 1231231231</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📧</span>
            <span className="footer-text">info@deepnetsoft.com</span>
          </div>
        </div>

        {/* Center Logo Section */}
        <div className="footer-center">
          <div className="footer-logo">
            <img src="/images/logobu.png" alt="Deep Net Soft" className="logo-image" />
          </div>
          <div className="logo-text">
            <span className="logo-main">DEEP NET SOFT</span>
          </div>
         
        </div>

        {/* Find Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">FIND US</h3>
          <div className="footer-item">
            <span className="footer-icon">📍</span>
            <div className="footer-address">
              <div>First floor, Geo Infopark,</div>
              <div>Infopark EXPY, Kakkanad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span className="copyright">© 2025 Deepnetsoft Solutions. All rights reserved.</span>
          <div className="footer-links">
            <a href="#terms" className="footer-link">Terms & Conditions</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
