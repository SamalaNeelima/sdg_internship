import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-cta">
          <div className="animated-text">
            <div>Enough Talk,</div>
            <div>
              <span>Let's Build Something Together</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content container">
        <div className="footer-logo">
          <img src="https://sdgsolutions.in/wp-content/uploads/2023/03/SDG-Logo.png" alt="SDG Logo" />
          <p>Copyright © 2024 All rights reserved by SDG Solutions. Built with love in [Your Location].</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Our Blog</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Our Blog</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Say Hello</h4>
            <ul>
              <li>Email: admin@example.com</li>
              <li>Email: hr@example.com</li>
              <li>Phone: 01235 088 233</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
