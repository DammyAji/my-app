import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.jpg'; // Adjust the path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll function for smooth scrolling
  const scrollToSection = (id) => {
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for home
    } else {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="bg-gray-200 md:bg-gray-400 p-4 ">
      <div className={`${styles.headerContainer} static`} >
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className={`${styles.logoImage}`} />
          <h1 className={`${styles.logoText}`}>InDepth Engineering Limited</h1>
        </div>
        
        {/* Laptop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a onClick={() => scrollToSection('#home')} className={styles.navLink}>Home</a>
          <a onClick={() => scrollToSection('#about')} className={styles.navLink}>About</a>
          <a onClick={() => scrollToSection('#services')} className={styles.navLink}>Services</a>
          <a onClick={() => scrollToSection('#projects')} className={styles.navLink}>Projects</a>
          <a onClick={() => scrollToSection('#contact')} className={styles.navLink}>Contact</a>
        </nav>
        
        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-gray-200 text-blue-800">
          <a onClick={() => scrollToSection('#home')} className="p-2">Home</a>
          <a onClick={() => scrollToSection('#about')} className="p-2">About</a>
          <a onClick={() => scrollToSection('#services')} className="p-2">Services</a>
          <a onClick={() => scrollToSection('#projects')} className="p-2">Projects</a>
          <a onClick={() => scrollToSection('#clients')} className="p-2">Clients</a>
          <a onClick={() => scrollToSection('#contact')} className="p-2">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
