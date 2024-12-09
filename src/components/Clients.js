import React from 'react';
import styles from './Clients.module.css';
import Image from '../assets/ENVIPLAN.jpg';
import Image1 from '../assets/FCT.jpg';
import Image2 from '../assets/CO.jpg';
import Image3 from '../assets/CO.jpg';

const Clients = () => {
  return (
    <section className={styles.clientsSection}>
      {/* Heading Section */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Clients we have worked with</h2>
      </div>

      {/* Carousel Section */}
      <div className={styles.carouselWrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.carousel}>
          <div className={styles.clientImage}>
            <img src={Image} alt="Client 1" />
          </div>
          <div className={styles.clientImage}>
            <img src={Image1} alt="Client 2"/>
          </div>
          <div className={styles.clientImage}>
            <img src={Image2} alt="Client 3" />
          </div>
          <div className={styles.clientImage}>
            <img src={Image3} alt="Client 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
