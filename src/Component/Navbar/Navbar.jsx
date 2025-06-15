import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">SolarBright</div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

         <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link>
        <Link to="products" smooth={true} offset={-70} duration={500}>Products</Link>
        <Link to="about" smooth={true} offset={-100} duration={500}>About</Link>
        <Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>

      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
