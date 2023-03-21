import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App'
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./components/Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
  },

  {
    path: "/login",
    element: <Login />,
   
  },

  {
    path: "/cart",
    element: <Cart />,
   
  },

{
    path: "/product",
    element: <Product />,
   
  },
 
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
