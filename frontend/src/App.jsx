
import React from "react";
import Announcement from "src/components/Announcement";
import Categories from "src/components/Categories";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Newsletter from "src/components/Newsletter";
import Products from "src/components/Products";
import Slider from "src/components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;