import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href="#home" onClick={() => handleScroll('home')} className={styles.navLink}>
        Home
      </a>
      <a href="#about" onClick={() => handleScroll('about')} className={styles.navLink}>
        About
      </a>
      <a href="#services" onClick={() => handleScroll('services')} className={styles.navLink}>
        Services
      </a>
      <a href="#projects" onClick={() => handleScroll('projects')} className={styles.navLink}>
        Projects
      </a>
      <a href="#contact" onClick={() => handleScroll('contact')} className={styles.navLink}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
