import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Products from './Component/Product/Products'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
