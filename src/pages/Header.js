import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="options">
        <NavLink
          to="/terms-and-conditions"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Terms and Conditions
        </NavLink>
        <NavLink
          to="/privacy-policy"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/mobile-privacy"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Mobile Privacy
        </NavLink>
        </div>
        <div class="header-content">
                <h1>Privacy Notice</h1>
        </div>
      <div class="container">
      
            <a href="#" class="btn btn-primary home-button">Home</a>
        
    </div>
    </header>
  );
}

export default Header;
