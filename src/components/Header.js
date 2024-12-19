import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.jpg'; // Adjust the path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll function for smooth scrolling with offset
  const scrollToSection = (id) => {
    const headerHeight = 70; // Adjust to match the header height
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for home
    } else {
      const section = document.querySelector(id);
      if (section) {
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
    }
    setMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className={`${styles.headerContainer} px-4 lg:px-8 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="Company Logo" className={`${styles.logoImage}`} />
          <h1 className={`${styles.logoText} text-lg`}>InDepth Engineering Limited</h1>
        </div>

        {/* Laptop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a
            onClick={() => scrollToSection('#home')}
            className={`${styles.navLink} hover:animate-pulse`}
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection('#about')}
            className={`${styles.navLink} hover:animate-pulse`}
          >
            About
          </a>
          <a
            onClick={() => scrollToSection('#services')}
            className={`${styles.navLink} hover:animate-pulse`}
          >
            Services
          </a>
          <a
            onClick={() => scrollToSection('#projects')}
            className={`${styles.navLink} hover:animate-pulse`}
          >
            Projects
          </a>
          <a
            onClick={() => scrollToSection('#contact')}
            className={`${styles.navLink} hover:animate-pulse`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-blue-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-gray-100 text-blue-800">
          <a onClick={() => scrollToSection('#home')} className="p-4 border-b border-gray-300">
            Home
          </a>
          <a onClick={() => scrollToSection('#about')} className="p-4 border-b border-gray-300">
            About
          </a>
          <a onClick={() => scrollToSection('#services')} className="p-4 border-b border-gray-300">
            Services
          </a>
          <a onClick={() => scrollToSection('#projects')} className="p-4 border-b border-gray-300">
            Projects
          </a>
          <a onClick={() => scrollToSection('#contact')} className="p-4 border-b border-gray-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
