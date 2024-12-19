import React, { useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const handleScroll = () => {
    const visionPos = visionRef.current.getBoundingClientRect().top;
    const missionPos = missionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (visionPos < windowHeight) {
      visionRef.current.classList.add(styles.animateFromLeft);
    }
    if (missionPos < windowHeight) {
      missionRef.current.classList.add(styles.animateFromRight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.aboutUsSection} bg-white py-10 px-5 md:px-20`} id="about">
      <h2 className="text-blue-400 text-3xl font-bold text-center underline-offset-8 mb-6">
        About Us
      </h2>
      <p className={`${styles.text} text-gray-800 text-lg leading-8`}>
        Indepth Engineering Limited, established 4th October, 2006 is a dynamic,client-focused Civil and Geotechnical Engineering consultancy firm.
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
      <p className={`${styles.text} text-gray-800 text-lg leading-8 mt-4`}>
        Our team believes in driving innovation and sustainability. We leverage the latest technology and methodologies
        to achieve excellence in all our projects, ensuring a greener and more efficient future.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <div
          ref={visionRef}
          className={`w-full md:w-1/2 bg-white text-center rounded transition-all ${styles.hiddenContent}`}
        >
          <div className={`${styles.heading} bg-blue-400 text-white py-3`}>
            <h3 className="text-xl font-bold">Our Vision</h3>
          </div>
          <p className={`${styles.statement} mt-4 p-6`}>
            To become a global brand and a standard reference point in the infrastructural development business in
            general and foundation engineering in particular.
          </p>
        </div>
        <div
          ref={missionRef}
          className={`w-full md:w-1/2 bg-white text-center rounded transition-all ${styles.hiddenContent}`}
        >
          <div className={`${styles.heading} bg-blue-400 text-white py-3`}>
            <h3 className="text-xl font-bold">Our Mission</h3>
          </div>
          <p className={`${styles.statement} mt-4 p-6`}>
            To apply ourselves thoroughly, entirely, innovatively, and appropriately to all our activities, running
            the gamut from the routine to the most complex of projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
