// AboutUs.js
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section  className={`${styles.aboutUsContainer} py-12 px-6`} id= "about">
      <h2 className="text-3xl font-bold text-blue-700  mb-6 text-center">
        About Us
      </h2>
      <p className="mb-4">
        Indepth Engineering Limited is a dynamic, client-focused Civil and Geotechnical Engineering consultancy firm. Our services encompass specialist engineering solutions in building foundations, bridge construction, geotechnical investigations for dams, landfills, and much more.
      </p>
      <p className="mb-4">
        With a commitment to bridging the gap between design and construction, we deliver optimal, safe designs that minimize construction costs while meeting high safety standards. Our experienced team provides tailored services, ensuring every project is aligned with the client's specifications and industry standards.
      </p>
      <p className="mb-4">
        Our areas of expertise include: subsoil investigations for various structures, route and material surveys for roads, pavement evaluation, and comprehensive civil and geotechnical services. Indepth Engineering is here to ensure the success of your next infrastructure project.
      </p>
    </section>
  );
};

export default AboutUs;
