import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="page-header">
      <div className="head">
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          {/* Left Side Links */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/combo" onClick={() => setMenuOpen(false)}>Combo</Link>

          {/* Logo in the Center */}
          <div className="logo-container">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img alt="logo" src={Logo} className="logo-img" />
            </Link>
          </div>

          {/* Right Side Links */}
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/gems" onClick={() => setMenuOpen(false)}>Gems</Link>       
          <Link to="/books" onClick={() => setMenuOpen(false)}>Books</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;
