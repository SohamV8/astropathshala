import React, { useState , useEffect} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import MobileLogo from '../assets/Logo/Mobile-logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ services: false, courses: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen({ services: false, courses: false });
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <header className="page-header">
            <div className="mobile-header">
        <div className="mobile-logo">
          <Link to="/" onClick={closeMenu}>
            <img alt="Mobile Logo" src={MobileLogo} className="mobile-logo-img" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className="head">
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          {/* Left Side Links */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div 
            className="dropdown"
            onMouseEnter={() => toggleDropdown('services')}
            onMouseLeave={() => toggleDropdown('services')}
          >
            <Link to="/service" onClick={() => setMenuOpen(false)} className='service-link'>
              Services 
              <img 
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png" 
                alt="expand-arrow" 
                className="dropdown-arrow justify-center align-middle flex-row z-10" 
              />
            </Link>
{/* mobile button for dropdown */}
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown('services')}
            >
              Services
              <img
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                alt="Expand Arrow"
                className="dropdown-arrow justify-center align-middle flex-row z-10"
              />
            </button>

            {dropdownOpen.services && (
              <div className="dropdown-menu">
                <Link to="/service" onClick={closeMenu}>All Services</Link>
                <Link to="/service/consultation" onClick={closeMenu}>Consultation</Link>
                <Link to="/service/pathpooja" onClick={closeMenu}>Path Pooja</Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown('courses')}
            onMouseLeave={() => toggleDropdown('courses')}
          >
            <Link to="/courses" onClick={() => setMenuOpen(false)} className='course-link'>
              Courses 
              <img 
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png" 
                alt="expand-arrow" 
                className="dropdown-arrow justify-center align-middle flex-row z-10" 
              />
            </Link>
{/* mobile button for dropdown */}
            <button
              className="dropdown-trigger"
              onClick={() => toggleDropdown('courses')}
            >
              Courses
              <img
                src="https://img.icons8.com/ios-glyphs/50/expand-arrow--v1.png"
                alt="Expand Arrow"
                className="dropdown-arrow justify-center align-middle flex-row z-10"
              />
            </button>


            {dropdownOpen.courses && (
              <div className="dropdown-menu">
                <Link to="/courses">All Courses</Link>
                <Link to="/courses/Popular">Popular Courses</Link>
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