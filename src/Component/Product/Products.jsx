import React from 'react';
import './Products.css';
import panel from '../../assets/panel.png';
import inverter from '../../assets/inverter.png';
import battery from '../../assets/battery.png';

const Products = () => {
  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">

        <div className="product-card">
          <img src={panel} alt="Solar Panel Kit" className="product-image" />
          <h3>Solar Panel Kit</h3>
          <p>High-efficiency panels perfect for homes and small businesses.</p>
        </div>

        <div className="product-card">
          <img src={inverter} alt="Solar Inverter" className="product-image" />
          <h3>Solar Inverter</h3>
          <p>Smart inverters that optimize power conversion and safety.</p>
        </div>

        <div className="product-card">
          <img src={battery} alt="Battery Storage" className="product-image" />
          <h3>Battery Storage</h3>
          <p>Reliable lithium-ion storage solutions for night-time energy.</p>
        </div>

      </div>
    </section>
  );
};

export default Products;
