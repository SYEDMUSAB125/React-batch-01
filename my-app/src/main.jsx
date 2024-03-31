import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import Feature from './components/Feature.jsx';
import Home from './components/Home.jsx';
import Pricing from './components/Pricing.jsx';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/feature",
    element: <Feature/>
  },
  {
    path: "/pricing",
    element: <Pricing/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <App />
  
   
   </React.StrictMode>,
)
