import {Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect, createContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Anouncement from "./components/Anouncement";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Error from './pages/Error';


export const AppContext = createContext();


function App() {
  const [userLogin, setUserLogin] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): null)
  
  const signin = (props) => {
    setUserLogin(props)
  }
  
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
  
  const updateCart = (props) => {
    if(!cart.includes(props)){

      setCart([...cart, props])
    }
  }

  const deleteItem = (props) => {
    setCart(cart.filter(item => item.id !== props.id))
  }
  const[products, setProducts] = useState([])
  const[category, setCategories] = useState([])

  useEffect(()=>{
    const url = "http://127.0.0.1:8001/api/product_list/"
        const abortCont = new AbortController();
    // pass second arg to fetch for the sake of abort controller
        fetch(url, { signal: abortCont.signal })
        .then(res => {
        if (!res.ok){
            throw Error("Resources not found")
        }
        return res.json()
        })
        .then((data) => {
            
            setProducts(data)
        })
        .catch((err) =>{
            //check for abort error
               console.log(err)
        })
    const url2 = "http://127.0.0.1:8001/api/category_list/"
        
    // pass second arg to fetch for the sake of abort controller
        fetch(url2, { signal: abortCont.signal })
        .then(res => {
        if (!res.ok){
            throw Error("Resources not found")
        }
        return res.json()
        })
        .then((data) => {
            
            setCategories(data)
        })
        .catch((err) =>{
            //check for abort error
               console.log(err)
        })
        //clean up
        return () => abortCont.abort();
    }, []
)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userLogin))
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [userLogin, cart])
  
  

  return (
    <div className="App">
      <AppContext.Provider value={{signin, userLogin, products, category,cart, deleteItem, updateCart, setCart}}>
      <Anouncement/>
        <Navbar />
        <Routes>
              <Route path="/" element= {<Home/>}></Route>
              <Route path="/login" element= {<Login/>}></Route>
              <Route path="/register" element= {<Register/>}></Route>
              <Route path="/cart" element= {<Cart/>}></Route>
              <Route path="/checkout" element = {<RequireAuth><Checkout/></RequireAuth>}></Route>
              <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    
    </div>

  )
}

export default App
