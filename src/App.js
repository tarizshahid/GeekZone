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


export default function App() {

  return (
   <>
      <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route  path='/cart' element={<Cart/>} />
          <Route  path='/checkout' element={<Checkout/>} />
          <Route  path='/signin' element={<Signin/>} />
          <Route  path='/signup' element={<SignUp />} />
          <Route  path='/dashboard/*' element={<Dashboard />} />
          <Route  path='/FAQs' element={<FAQs />} />
          <Route  path='/SingleProductView' element={<SingleProductView/>} /> 
      </Routes>

   </>
  )

}
