import React from 'react';
import styles from './Contacts.module.css'; // Importing the CSS module
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={`bg-gray-200 p-8 ${styles.contactSection}`}>
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Contact Form */}
        <form className={`${styles.form} bg-white shadow-md p-6 rounded-lg flex-1`}>
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
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
   dddr0rdr-r5-55e4        <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="text-blue-600">123 Engineering Road, Tech City</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              <span className="text-blue-600">+123 456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span className="text-blue-600">info@indeptheng.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
            <FaTwitter className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
            <FaLinkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
