import React from 'react'

import Categories from "../components/Categories";

import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
        
       
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
       
    </div>
  )
}

export default Home