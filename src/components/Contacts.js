import React from "react";
import styles from "./Contacts.module.css"; // Importing the CSS module
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className={`bg-gray-100 p-8 ${styles.contactSection}`}
      id="contact"
    >
      <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">
        Contact Us
      </h2>
      <p className="text-center text-lg font-semibold text-blue-800 mb-6">
        Feel free to reach out to us via social media or by submitting the form
        below!
      </p>

      <div className="flex flex-col md:flex-row md:justify-center gap-8 items-center">
        {/* Contact Form */}
        <form
          className={`${styles.form} bg-lightgray shadow-md p-6 rounded-lg`}
          style={{ width: "50%", marginLeft: "20px" }}
        >
          <label className="block mb-4">
            <span className="text-blue-800 font-bold">Name</span>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Your Name"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-blue-800 font-bold">Email</span>
            <input
              type="email"
              className={`${styles.input}`}
              placeholder="Your Email"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-blue-800 font-bold">Message</span>
            <textarea
              className={`${styles.textarea}`}
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div
          className="bg-lightgray shadow-none p-6 rounded-lg"
          style={{ width: "80%"}}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-800" size={28} />
              <span className="text-blue-800 text-lg font-medium">
                13c Waziri Ibrahim Crescent, Abakpa Gra, Kaduna.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-800" size={28} />
              <span className="text-blue-800 text-lg font-medium">
                +234 803 7044 648 +234 807 6702 298
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-800" size={28} />
              <span className="text-blue-800 text-lg font-medium">
                indepthgt@yahoo.com
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6 justify-center">
            <FaFacebook
              className="text-blue-800 cursor-pointer hover:text-blue-900"
              size={32}
            />
            <FaLinkedin
              className="text-blue-800 cursor-pointer hover:text-blue-900"
              size={32}
            />
            <FaWhatsapp
              className="text-blue-800 cursor-pointer hover:text-blue-900"
              size={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
