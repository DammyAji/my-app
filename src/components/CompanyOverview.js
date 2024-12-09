import React from "react";
import styles from "./CompanyOverview.module.css";

const CompanyOverview = () => {
  const content = [
    { heading: "Dedicated Team", image: "CO.jpg", text: "We are a project delivery company with extensive experience across the Civil and Geotechnical Engineering sectors, specializing in Infrastructure Development, Construction, and Environmental Solutions. Whatever your project requirements, we have the expertise to provide innovative and sustainable solutions tailored to your needs. Our team of professionals excels in Site Investigations, Foundation Engineering, Structural Analysis, and Soil Stabilization, as well as Environmental and Water Resources Engineering. With our broad range of capabilities and commitment to excellence, we are equipped to handle projects of any size or complexity, ensuring successful delivery every time." },
    { heading: "Delivering excellence at every stage", image: "CO1.jpg", text: "We pride ourselves on offering cost-effective, timely, and sustainable solutions to our clients. Whether your project requires Foundation Design, Geotechnical Site Investigations, Structural Engineering, or Soil Stabilization Services, we are here to support you. Our unwavering commitment to excellence ensures that we deliver outstanding results that surpass your expectations at every step of your project journey." },
    { heading: "Your goals, Our commitment", image: "CO2.jpg", text: "With our expertise in Civil Engineering Design, Construction Supervision, Geotechnical Analysis, and Infrastructure Maintenance, we are fully dedicated to your success. We understand the unique challenges of the civil and geotechnical engineering sectors and are ready to deliver innovative, practical solutions that advance your projects and drive long-term value." },
    { heading: "Innovative Design for a Sustainable Future", image: "CO3.jpg", text: "Our approach to civil and geotechnical engineering revolves around creativity and innovation. We specialize in delivering cutting-edge designs for complex projects, incorporating advanced geotechnical analysis, sustainable materials, and state-of-the-art construction techniques. By blending technical expertise with forward-thinking solutions, we ensure that every project is not only functional but also resilient and environmentally conscious." },
  ];

  return (
    <section className={styles.companyOverview}>
      <h2 className={styles.heading}>Company Overview</h2>
      {content.map((item, index) => (
        <div
          key={index}
          className={`${styles.overviewItem} ${index % 2 === 0 ? styles.flexRow : styles.flexRowReverse}`}
        >
          <div className={styles.textContent}>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={require(`../assets/${item.image}`)} alt={item.heading} className={styles.image} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CompanyOverview;
