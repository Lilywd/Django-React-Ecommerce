import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Product from "src/pages/Product";
import ProductList from "src/pages/ProductList";
import Register from "src/pages/Register";
import Login from "src/pages/Login";
import Cart from "src/pages/Cart";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cart/>
    <Login/>
    <Register/>
    <Product/>
    <ProductList/>

  </React.StrictMode>,
)
