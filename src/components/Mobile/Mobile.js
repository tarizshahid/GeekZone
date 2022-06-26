import {useEffect, useState} from 'react'
import React from 'react'
import Navbar from '../Homepage/Navbar'
import {h1} from '../Gaming/Gaming.css'
import ProductCard from '../Homepage/ProductCard'
import * as Realm from "realm-web"

export default function Drone() {
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
    <h1>MOBILE</h1>
    <ProductCard product={products}/>

    </>
  )
}