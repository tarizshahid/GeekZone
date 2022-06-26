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
    const REALM_APP_ID = "products-kzbxu";
    const app = new Realm.App({id: REALM_APP_ID})
    const credentials = Realm.Credentials.anonymous();
    try {
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        setProducts(allProducts);
        console.log(allProducts)
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
