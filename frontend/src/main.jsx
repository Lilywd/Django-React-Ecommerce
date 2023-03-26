import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import Error from "./pages/Error";


import { Provider } from 'react-redux';
import store from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,

   
  },

  {
    path: "/login",
    element: <Login />,
   
  },

  {
    path: "/register",
    element: <Register />,
   
  },

  {
    path: "/activate/:uid/:token",
    element: <Activate />,
   
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
   
  },
 

  {
    path: "/password/reset/confirm/:uid/:token",
    element: <ResetPasswordConfirm />,
   
  },

  {
    path: "/cart",
    element: <Cart />,
   
  },
  
 
  {
    path: "/Product",
    element: <Product />,
   
  },
 
 
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
