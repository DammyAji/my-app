import React, { useState } from "react";
import styles from "./Services.module.css";

const Services = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const services = [
    { title: "Subsoil Investigation for buildings", content: "Subsoil investigation is crucial for determining the soil characteristics beneath a building site. Our experts conduct detailed soil analysis to assess bearing capacity, settlement potential, and stability, ensuring safe and durable building foundations. This process helps prevent structural issues and supports cost-effective construction." },
    { title: "DeepSoil Investigation for bridges", content: "Bridges require robust foundations to endure significant loads and environmental stresses. Our deep soil investigation service includes advanced drilling and testing methods to evaluate subsurface conditions, enabling the design of stable bridge foundations that withstand dynamic forces and maintain long-term performance." },
    { title: "Geotechnical Investigation for dams, dykes, embankments, and landfill sites", content: "Our geotechnical investigations for dams, dykes, embankments, and landfill sites focus on soil stability, permeability, and strength. We provide comprehensive reports and design recommendations to prevent seepage, erosion, or failure, ensuring the safety and longevity of these critical structures." },
    { title: "Bridge construction", content: "Our bridge construction services encompass design, material selection, and project execution with precision and efficiency. We prioritize safety, durability, and functionality, utilizing innovative engineering techniques to deliver bridges that meet both current and future demands." },
    { title: "Airport pavement design", content: "Designing airport pavements demands a meticulous approach to support heavy aircraft loads and frequent usage. Our engineers develop tailored solutions, incorporating advanced materials and cutting-edge techniques, to create runways and taxiways that ensure optimal performance and safety." },
    { title: "Road geometry and pavement design", content: "We specialize in designing road geometry and pavements that enhance traffic flow, safety, and durability. Our team conducts thorough site evaluations and uses state-of-the-art software to develop road layouts and pavement structures that meet regulatory standards and user needs." },
    { title: "Pavement evaluation and material survey for road", content: "Pavement evaluation and material surveys are critical to assessing road conditions and ensuring sustainability. Our experts perform thorough investigations to identify material properties, pavement strength, and areas needing maintenance, providing actionable insights to improve road longevity." },
    { title: "Route Soils and materials Survey for roads", content: "Our route soils and materials surveys involve detailed analysis of soil and material properties along proposed road alignments. We provide critical data for selecting the best construction techniques and materials, ensuring the road’s structural integrity and cost efficiency." },
  ];

  const toggleService = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <section className={`${styles.servicesSection} bg-blue-0 p-8`} id="services">
      {/* Heading */}
      <h2 className="text-white text-3xl font-bold uppercase mb-8">Services We Offer</h2>

      {/* Services List */}
      <div className="flex flex-col items-center space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleService(index)}
            className={`${styles.serviceItem} w-full lg:w-11/12 bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all`}
          >
            {/* Service Header */}
            <div className={`${styles.serviceHeader} flex items-center font-bold text-lg text-black`}>
              <span className="mr-3 text-2xl font-extrabold">+</span>
              {service.title}
            </div>
            {/* Dropdown Content */}
            {openServiceIndex === index && (
              <div className="mt-4 text-black text-base leading-7 text-left">{service.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
