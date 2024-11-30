// src/components/CompanyOverview.js
import React from 'react';
import styles from './CompanyOverview.module.css';
import image1 from '../assets/CO.jpg';
import image2 from '../assets/CO.jpg';
import image3 from '../assets/CO.jpg';
import image4 from '../assets/CO.jpg';

const CompanyOverview = () => {
  const writeUps = [
    {
      heading: "Dedicated Team",
      text: "We are a leading engineering company with a commitment to providing top-notch services. Our team of experts works tirelessly to bring innovative solutions to meet our clients' needs.     We are a leading engineering company with a commitment to providing top-notch services. Our team of      We are a leading engineering company with a commitment to providing top-notch services. Our team of       We are a leading engineering company with a commitment to providing top-notch services. Our team of       We are a leading engineering company with a commitment to providing top-notch services. Our team of         We are a leading engineering company with a commitment to providing top-notch services. Our team of         We are a leading engineering company with a commitment to providing top-notch services. Our team of           We are a leading engineering company with a commitment to providing top-notch services. Our team of             We are a leading engineering company with a commitment to providing top-notch services. Our team of                                We are a leading engineering company with a commitment to providing top-notch services. Our team of                We are a leading engineering company with a commitment to providing top-notch services. Our team of                     We are a leading engineering company with a commitment to providing top-notch services. Our team of                               We are a leading engineering company with a commitment to providing top-notch services. Our team of                            We are a leading engineering company with a commitment to providing top-notch services. Our team of                        We are a leading engineering company with a commitment to providing top-notch services. Our team of                  We are a leading engineering company with a commitment to providing top-notch services. Our team of ",
      image: image1,
      alt: "Engineering Team",
    },
    {
      heading: "Quality Projects",
      text: "With years of experience and a focus on quality, our projects stand as a testament to our dedication.",
      image: image2,
      alt: "Construction Project",
    },
    {
      heading: "Sustainable Solutions",
      text: "Our mission is to continue being a reliable partner, delivering sustainable engineering solutions.",
      image: image3,
      alt: "Sustainable Solutions",
    },
    {
      heading: "Innovative Designs",
      text: "Our innovative approach and precision in engineering drive us to excel in every project.",
      image: image4,
      alt: "Innovative Project Design",
    },
  ];

  return (
    <section className={`p-4 ${styles.companyOverview}`}>
      <h2 className="text-2xl md:text-3xl text-center font-bold underline text-blue-600 mb-6">
        Our Company Overview
      </h2>
      
      <div className={styles.contentContainer}>
        {writeUps.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}
          >
            <img 
              src={item.image} 
              alt={item.alt} 
              className={styles.image}
            />
            <div className={styles.writeUp}>
              <h3 className="text-blue-600 font-semibold">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverview;
