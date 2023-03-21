import Anouncement from "./components/Anouncement";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";


function App() {
  

  return (
    <div className="App">
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
