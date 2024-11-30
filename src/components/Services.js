import React, { useState } from "react";
import styles from "./Services.module.css";

const Services = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const services = [
    { title: "Engineering Consulting", content: "Comprehensive engineering solutions tailored to your project." },
    { title: "Project Management", content: "Efficient planning, execution, and management of engineering projects." },
    { title: "Structural Design", content: "Innovative and safe structural design services." },
    { title: "Feasibility Studies", content: "Detailed project feasibility analysis to ensure successful outcomes." },
  ];

  const toggleService = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <section className={`${styles.servicesSection} bg-blue-0 p-8`}>
      {/* Heading */}
      <h2 className="text-white text-3xl font-bold uppercase mb-8">Services We Offer</h2>

      {/* Services List */}
      <div className="flex flex-col items-center space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleService(index)}
            className={`${styles.serviceItem} w-11/12 md:w-9/12 lg:w-8/12 bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all`}
          >
            {/* Service Header */}
            <div className="flex items-center font-bold text-lg text-black">
              <span className="mr-3 text-2xl font-extrabold">+</span>
              {service.title}
            </div>
            {/* Dropdown Content */}
            {openServiceIndex === index && (
              <div className="mt-4 text-black text-base leading-7">{service.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
