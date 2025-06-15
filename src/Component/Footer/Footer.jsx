import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    
    <div className='business-info'>
        <footer className="footer">
  <p>&copy; {new Date().getFullYear()} SolarBright. All rights reserved.</p>
</footer>

       <h3>SolarBright Nigeria</h3>
        <p><strong>Phone:</strong> +234 800 123 4567</p>
        <p><strong>Email:</strong> info@solarbright.com.ng</p>
        <p><strong>Address:</strong> 123 Energy Avenue, Lagos, Nigeria</p>
        <p><strong>Open:</strong> Mon–Sat: 8am – 6pm</p> 
      
      
    </div>
  )
}

export default Footer
