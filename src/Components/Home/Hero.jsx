import React from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import Category from '../Category/Category';
import Shop from '../Cards/Shop';
import Footer from '../Footer/Footer';


const Hero = () => {
  return (
<div>
    <Navbar/>
    <Slider/>
    <Category/>
    <Shop/>
    <Footer/>
    
</div>
  )
}

export default Hero