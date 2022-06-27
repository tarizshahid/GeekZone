import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard/Dashboard'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Catalog from './index'
import Cart from './components/Cart'
import Navbar from './components/Homepage/Navbar'
import Slider from './components/Homepage/Slider'
import {useEffect, useState} from 'react'
import ProductCard from './components/Homepage/ProductCard'
import { Card } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import Footer from "./components/Footer/footer"
import Checkout from "./components/checkout/Checkout"
import Signin from "./components/Signin"
import SignUp from './components/Signup'
import FAQs from "./components/FAQs/FAQs"
import Homepage from './components/Homepage/Homepage';
import SingleProductView from './components/SingleProductView'
import Gaming from './components/Gaming/Gaming'
import Drone from './components/Drone/Drone'
import Mobile from './components/Mobile/Mobile'
import Health from './components/Health/Health'
import Office from './components/Office/Office'
import { NotFound } from './components/NotFound'
import UserDashboard from './components/UserDashboard/UserDashboard'
import AddProducts from './components/Homepage/AddProducts'
import AddProd from './components/AddProduct/addProduct'

export default function App() {
  //localStorage.clear();
  localStorage.removeItem("cart")
  console.log("cleared");
  return (
   <>
      <Routes>
          <Route  path='/home' element={<Homepage/>} />
          <Route  path='/Gaming' element={<Gaming/>} />
          <Route  path='/Drones' element={<Drone/>} />
          <Route  path='/Mobile-Gadgets' element={<Mobile/>} />
          <Route  path='/Health' element={<Health/>} />
          <Route  path='/Office' element={<Office/>} />
          <Route  path='/cart' element={<Cart/>} />
          <Route  path='/checkout' element={<Checkout/>} />
          <Route  path='/signin' element={<Signin/>} />
          <Route  path='/signup' element={<SignUp />} />
          <Route  path='/dashboard/*' element={<Dashboard/>} />
          <Route  path='/FAQs' element={<FAQs />} />
          <Route  path='/SingleProductView/:id' element={<SingleProductView/>} /> 
          <Route  path='/dashboard/products/AddProduct' element={<AddProd/>}/>
          <Route  path='/UserDashboard' element={<UserDashboard/>}/>
          <Route exact path='/' element={<Homepage/>} /> 
          <Route exact path='*' element={<NotFound/>} />  
      </Routes>

   </>
  )

}
