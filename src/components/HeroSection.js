// src/components/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';
import heroImage from '../assets/rock.jpg'; // replace with your image path

function HeroSection() {
  return (
    <section className={styles.hero}>
      <img src={heroImage} alt="Engineering background" className={styles.image} />
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <h1 className={styles.title}>Welcome to InDepth Engineering Limited</h1>
        <p className={styles.subtitle}>Building Beyond Borders, Shaping a Brighter Tomorrow</p>
      </div>
    </section>
  );
}

export default HeroSection;
