import {useEffect, useState} from 'react'
import React from 'react'
import Navbar from "./Navbar"
import Slider from './Slider'
import ProductCard from './ProductCard'
import Footer from "../Footer/footer"
import * as Realm from "realm-web"
import axios from 'axios';

// import Cart from './components/Cart'
// import ProductCard from './components/Homepage/icons/ProductCard'
// import Checkout from "./components/checkout/Checkout"
// import Signin from "./components/Signin"
// import Signup from "./components/Signup"
// import SignUp from './components/Signup'
// import FAQs from "./components/FAQs/FAQs"



export default function Homepapge() {
   const [products, setProducts] = useState([])
  
   useEffect(async ()=> {
    try {

        console.log("iddd");
        axios.post(`http://localhost:4000/api/items/getData`,{data:{}}).then(res => {
            const allProducts=res.data.data
            console.log("allProducts", allProducts);
            setProducts(allProducts);
            console.log(allProducts)
         } );

    } catch (error) {
        console.error(error);
    }
  },[])

  return (
    <>
    <Navbar/>
    <Slider/>
    <ProductCard product={products}/>
    <Footer/>
    {/* <ProductCard/> */}


   </>
  )

}
