import React, { useState } from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <section className={`${styles.aboutUsSection} bg-white py-10 px-5 md:px-20` } id="about">
      <h2 className="text-blue-400 text-3xl font-bold text-center underline-offset-8 mb-6">
        About Us
      </h2>
      <p className={`${styles.text} text-gray-800 text-lg leading-8`}>
        Indepth Engineering Limited is a dynamic, client-focused Civil and Geotechnical Engineering consultancy firm.
        Our services encompass specialist engineering solutions in building foundations, bridge construction,
        geotechnical investigations for dams, landfills, and much more.
      </p>
      <p className={`${styles.text} text-gray-800 text-lg leading-8 mt-4`}>
        With a commitment to bridging the gap between design and construction, we deliver optimal, safe designs
        that minimize construction costs while meeting high safety standards. Our experienced team provides tailored
        services, ensuring every project is aligned with the client's specifications and industry standards.
      </p>
      <p className={`${styles.text} text-gray-800 text-lg leading-8 mt-4`}>
        Our areas of expertise include: subsoil investigations for various structures, route and material surveys for
        roads, pavement evaluation, and comprehensive civil and geotechnical services. Indepth Engineering is here
        to ensure the success of your next infrastructure project.
      </p>

      {/* Mission and Vision Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        {/* Mission */}
        <div className="w-full md:w-1/2">
          <div
            className="cursor-pointer bg-blue-400 hover:bg-blue-800 text-white text-center py-4 rounded transition-all duration-300 font-semibold text-lg"
            onClick={() => toggleSection("mission")}
          >
            Our Mission
          </div>
          {visibleSection === "mission" && (
            <div className="bg-gray-100 text-gray-800 text-lg p-6 rounded shadow-md mt-4 mx-auto w-4/5 text-center font-roboto leading-relaxed">
              To apply ourselves thorougly,entirely,innovatively and appropriately to all our activities,running the gamut from the routine to the most complex of projects.
            </div>
          )}
        </div>

        {/* Vision */}
        <div className="w-full md:w-1/2">
          <div
            className="cursor-pointer bg-blue-400 hover:bg-blue-800 text-white text-center py-4 rounded transition-all duration-300 font-semibold text-lg"
            onClick={() => toggleSection("vision")}
          >
            Our Vision
          </div>
          {visibleSection === "vision" && (
            <div className="bg-gray-100 text-gray-800 text-lg p-6 rounded shadow-md mt-4 mx-auto w-4/5 text-center font-roboto leading-relaxed">
            To become a global brand and a standard reference point in the infrastructural developement business in general and foundation engineering in particular.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
