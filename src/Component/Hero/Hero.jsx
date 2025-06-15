import React from 'react';
import './Hero.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <h1>Power Your Life with Clean Solar Energy ☀️</h1>
        <p>Reliable. Affordable. Sustainable. Join thousands switching to solar today.</p>
       <button className="hero-btn"><a href="https://wa.me/2348109500453?text=Hello%20SolarBright!%20I%20would%20like%20to%20request%20a%20quote%20for%20solar%20installation."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button" >Get a Free Quote</a></button>
        <div className="hero-links">
          <a href="tel:+2348109500453">
            <FaPhone />
            Call Us</a>
          <a href="mailto:oyediran904@gmail.com"> <FaEnvelope/>Email Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
