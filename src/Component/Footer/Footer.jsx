import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    
    <div className='business-info'>
        <footer className="footer">
  <p>&copy; {new Date().getFullYear()} SolarBright. All rights reserved.</p>
</footer>

       <h3>SolarBright Nigeria</h3>
        <p><strong>Phone:</strong> +234 810 950 0453</p>
        <p><strong>Email:</strong> info@solarbright.com.ng</p>
        <p><strong>Address:</strong> 56 Akobo Avenue, Ibadan, Nigeria</p>
        <p><strong>Open:</strong> Mon–Sat: 8am – 6pm</p> 
      
      
    </div>
  )
}

export default Footer
