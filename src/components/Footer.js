import React from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={LOGO_URL} alt="Food Villa Logo" className="footer-logo" />
          <p className="footer-description">
            Delivering happiness with every order. Your favorite meals,
            delivered right to your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>📞 +91 1234567890</li>
            <li>📧 support@foodvilla.com</li>
            <li>📍 Krishna Colony, Bhiwani</li>
            <li>Haryana, India - 127021</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="social-logo"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                alt="Twitter"
                className="social-logo"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className="social-logo"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="social-logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} M4U(Meals4U). All rights reserved. Created with ❤️ by
          Anshika Rakheja
        </p>
      </div>
    </footer>
  );
};

export default Footer;
