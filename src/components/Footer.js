import React from 'react';
import styles from './Footer.module.css'; // Importing the CSS module

function Footer() {
  return (
    <footer className={`${styles.footer} text-center`}>
      <p>&copy; 2024 Indepth Engineering Limited.</p>
    </footer>
  );
}

export default Footer;
