import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ services: false, courses: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="page-header">
      <div className="head">
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          {/* Left Side Links */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div 
            className="dropdown"
            onMouseEnter={() => toggleDropdown('services')}
            onMouseLeave={() => toggleDropdown('services')}
          >
            <Link to="/service" onClick={() => setMenuOpen(false)}>
              Services 
              <img 
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png" 
                alt="expand-arrow" 
                className="dropdown-arrow justify-center align-middle flex-row" 
              />
            </Link>
            {dropdownOpen.services && (
              <div className="dropdown-menu">
                <Link to="/service/consultation">Consultation</Link>
                <Link to="/service/pathpooja">Path Pooja</Link>
                <Link to="/service/tarot">Tarot</Link>
                <Link to="/service/vastu">Vastu</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown('courses')}
            onMouseLeave={() => toggleDropdown('courses')}
          >
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Courses 
              <img 
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png" 
                alt="expand-arrow" 
                className="dropdown-arrow justify-center align-middle flex-row" 
              />
            </Link>
            {dropdownOpen.courses && (
              <div className="dropdown-menu">
                <Link to="/courses/kp">K.P Astrology</Link>
                <Link to="/courses/lalcourse">Lal Kitab</Link>
                <Link to="/courses/vediccourse">Vedic Astrology</Link>
                <Link to="/courses/nadi">Nadi Astrology</Link>
                <Link to="/courses/numerology">Numerology</Link>
                <Link to="/courses/tarotcourse">Tarot</Link>
                <Link to="/courses/workshops">Workshops</Link>
              </div>
            )}
          </div>

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
