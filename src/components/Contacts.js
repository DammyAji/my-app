import React from "react";
import styles from "./Contacts.module.css"; // Importing the CSS module
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={`bg-white-200 p-8 ${styles.contactSection}`} id="contact">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center">
        {/* Contact Form */}
        <form className={`${styles.form} bg-white shadow-md p-6 rounded-lg`} style={{ width: "80%" }}>
          <label className="block mb-4">
            <span className="text-blue-600">Name</span>
            <input type="text" className={`${styles.input}`} placeholder="Your Name" required />
          </label>
          <label className="block mb-4">
            <span className="text-blue-600">Email</span>
            <input type="email" className={`${styles.input}`} placeholder="Your Email" required />
          </label>
          <label className="block mb-4">
            <span className="text-blue-600">Message</span>
            <textarea className={`${styles.textarea}`} rows="4" placeholder="Your Message" required></textarea>
          </label>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="bg-white shadow-none p-6 rounded-lg" style={{ width: "80%" }}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" size={28} />
              <span className="text-blue-600 text-lg font-medium">13c Waziri Ibrahim Crescent,
              Abakpa Gra, Kaduna.</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" size={28} />
              <span className="text-blue-600 text-lg font-medium"> +234 803 7044 648
              +234 807 6702 298</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" size={28} />
              <span className="text-blue-600 text-lg font-medium">indepthgt@yahoo.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6">
            <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800" size={32} />
            <FaLinkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={32} />
            <FaWhatsapp className="text-blue-600 cursor-pointer hover:text-blue-800" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
