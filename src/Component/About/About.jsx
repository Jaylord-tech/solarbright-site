import React, { useState, useEffect } from 'react';
import './About.css';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import about3 from '../../assets/about3.jpg';
import about4 from '../../assets/about4.jpg';
import about5 from '../../assets/about5.jpg';
import about6 from '../../assets/about6.jpg';
import about7 from '../../assets/about7.jpg';

const About = () => {
  const images = [about1, about2, about3, about4, about5, about6, about7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(slideInterval); // cleanup
  }, [images.length]);

  return (
    <section className="about" id="about">
      <h1> Empowering Homes and Businesses with Clean, Reliable Energy</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={images[currentIndex]} alt="About SolarBright" />
        </div>
        <div className="about-content">
          <h2>About SolarBright</h2>
          <p>
            We offer reliable solar solutions for homes and businesses.
            SolarBright empowers you with clean, renewable energy for a brighter tomorrow.
          </p>
          <p>
            Our solar panels, batteries, and inverters are designed for high performance and safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
