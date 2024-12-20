import React from 'react';
import styles from './Clients.module.css';
import Image1 from '../assets/bua.jpg';
import Image2 from '../assets/FCT.jpg';
import Image3 from '../assets/clients1.jpg';
import Image4 from '../assets/clients.jpg'; // Add as many images as you like
import Image5 from '../assets/fcd.jpg'
import Image6 from '../assets/china.jpg'
import Image7 from '../assets/works.jpg'
import Image8 from '../assets/smc.jpg'
import Image9 from '../assets/ENVIPLAN.jpg'


// Array of client images
const clientImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7 ,Image8, Image9 ];

const Clients = () => {
  return (
    <section className={styles.clientsSection}>
      {/* Heading Section */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Clients we have worked with</h2>
      </div>

      {/* Carousel Section */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {clientImages.map((image, index) => (
            <div className={styles.clientImage} key={index}>
              <img src={image} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
};

export default Clients;
