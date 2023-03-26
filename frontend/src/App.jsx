import Anouncement from "./components/Anouncement";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";


function App() {
  

  return (
    <div className="App">
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
