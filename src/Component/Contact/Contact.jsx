import React from 'react';
import './Contact.css';
import contactImg from '../../assets/contactImg.jpg'
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Reach out for a quote or any questions!</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type= {Number} placeholder="Your Number" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Details</h3>
          <div><strong>Phone:</strong> +234 810 950 0453</div>
          <div><strong>Email:</strong> info@solarbright.com</div>
          <div><strong>Address:</strong> 56 Akobo Avenue, Ibadan, Nigeria</div>
            
              <a 
                 href="https://wa.me/2348109500453?text=Hello%20SolarBright!%20I%20would%20like%20to%20inquire%20about%20your%20solar%20installation%20services."
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-button"
              >
                <FaWhatsapp/>
                Chat on WhatsApp
              </a>
      
        </div>
      </div>
    </section>
  );
};

export default Contact;
