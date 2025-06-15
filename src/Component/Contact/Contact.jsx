import React from 'react';
import './Contact.css';
import contactImg from '../../assets/contactImg.jpg'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Reach out for a quote or any questions!</p>
          <form 
           action="https://formspree.io/f/mblyyzgj"
            method="POST">
            <input type="text" name="name" required placeholder="Your Name" />
            <input type={Number} name="number" required placeholder="Your Number" />
            <input type="email" name="email" required placeholder="Your Email" />
            <textarea name="message" required placeholder="Your Message"></textarea>
            <button type="submit">Send  Message<FaArrowRight/></button>
          </form>

          <span></span>
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
