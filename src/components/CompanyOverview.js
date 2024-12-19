import React from 'react';
import styles from './CompanyOverview.module.css';
import Image1 from '../assets/projects1.jpg';
import Image2 from '../assets/CO1.jpg';
import Image3 from '../assets/CO2.jpg';
import Image4 from '../assets/CO.jpg';

const CompanyOverview = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Div 1 */}
      <div className={`flex flex-col md:flex-row items-center ${styles.section} md:odd:flex-row-reverse`}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl font-semibold mb-4">Dedicated Team</h2>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed">
          We are a project delivery company with extensive experience across the Civil and Geotechnical Engineering sectors, specializing in Infrastructure Development, Construction, and Environmental Solutions. Whatever your project requirements, we have the expertise to provide innovative and sustainable solutions tailored to your needs. Our team of professionals excels in Site Investigations, Foundation Engineering, Structural Analysis, and Soil Stabilization, as well as Environmental and Water Resources Engineering. With our broad range of capabilities and commitment to excellence, we are equipped to handle projects of any size or complexity, ensuring successful delivery every time
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Image1} alt="Dedicated Team" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Div 2 */}
      <div className={`flex flex-col md:flex-row items-center ${styles.section} md:even:flex-row`}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl font-semibold mb-4">Delivering excellence at every stage</h2>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed">
          We pride ourselves on offering cost-effective, timely, and sustainable solutions to our clients. Whether your project requires Foundation Design, Geotechnical Site Investigations, Structural Engineering, or Soil Stabilization Services, we are here to support you. Our unwavering commitment to excellence ensures that we deliver outstanding results that surpass your expectations at every step of your project journey.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Image2} alt="Quality Projects" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Div 3 */}
      <div className={`flex flex-col md:flex-row items-center ${styles.section} md:odd:flex-row-reverse`}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl font-semibold mb-4">Your goals, Our commitment</h2>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed">
          With our expertise in Civil Engineering Design, Construction Supervision, Geotechnical Analysis, and Infrastructure Maintenance, we are fully dedicated to your success. We understand the unique challenges of the civil and geotechnical engineering sectors and are ready to deliver innovative, practical solutions that advance your projects and drive long-term value.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Image3} alt="Sustainable Solutions" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Div 4 */}
      <div className={`flex flex-col md:flex-row items-center ${styles.section} md:even:flex-row`}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl font-semibold mb-4">Innovative Design for a Sustainable Future</h2>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed">
          Our approach to civil and geotechnical engineering revolves around creativity and innovation. We specialize in delivering cutting-edge designs for complex projects, incorporating advanced geotechnical analysis, sustainable materials, and state-of-the-art construction techniques. By blending technical expertise with forward-thinking solutions, we ensure that every project is not only functional but also resilient and environmentally conscious.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Image4} alt="Innovative Design" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
