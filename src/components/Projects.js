// src/components/Projects.js
import React from 'react';
import styles from './Projects.module.css'; // Importing the CSS module
import projectImage1 from '../assets/CO.jpg'; // Replace with actual image paths
import projectImage2 from '../assets/CO.jpg';
import projectImage3 from '../assets/CO.jpg';
import projectImage4 from '../assets/CO.jpg';

const Projects = () => {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-blue-600 mb-6">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Project 1 */}
        <div className={`${styles.card} p-4`}>
          <img 
            src={projectImage1} 
            alt="Project 1" 
            className="w-full h-48 object-cover rounded-xl mb-6" // Increased margin-bottom and border-radius
          />
          <p className="text-white font-medium text-lg">Project Title 1</p>
          <p className="text-white text-sm mt-4">
            A brief description of Project 1, highlighting its main features and success.
          </p>
        </div>

        {/* Project 2 */}
        <div className={`${styles.card} p-4`}>
          <img 
            src={projectImage2} 
            alt="Project 2" 
            className="w-full h-48 object-cover rounded-xl mb-6" // Increased margin-bottom and border-radius
          />
          <p className="text-white font-medium text-lg">Project Title 2</p>
          <p className="text-white text-sm mt-4">
            A brief description of Project 2, focusing on its innovative approach and results.
          </p>
        </div>

        {/* Project 3 */}
        <div className={`${styles.card} p-4`}>
          <img 
            src={projectImage3} 
            alt="Project 3" 
            className="w-full h-48 object-cover rounded-xl mb-6" // Increased margin-bottom and border-radius
          />
          <p className="text-white font-medium text-lg">Project Title 3</p>
          <p className="text-white text-sm mt-4">
            A summary of Project 3, showcasing its impact and unique methodologies.
          </p>
        </div>

        {/* Project 4 */}
        <div className={`${styles.card} p-4`}>
          <img 
            src={projectImage4} 
            alt="Project 4" 
            className="w-full h-48 object-cover rounded-xl mb-6" // Increased margin-bottom and border-radius
          />
          <p className="text-white font-medium text-lg">Project Title 4</p>
          <p className="text-white text-sm mt-4">
            Details about Project 4, emphasizing its importance and key takeaways.
          </p>
        </div>
        <div className={`${styles.card} p-4`}>
          <img 
            src={projectImage4} 
            alt="Project 4" 
            className="w-full h-48 object-cover rounded-xl mb-6" // Increased margin-bottom and border-radius
          />
          <p className="text-white font-medium text-lg">Project Title 4</p>
          <p className="text-white text-sm mt-4">
            Details about Project 4, emphasizing its importance and key takeaways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
