import {useEffect, useState} from 'react'
import React from 'react'
import Navbar from '../Homepage/Navbar'
import {h1} from '../Gaming/Gaming.css'
import ProductCard from '../Homepage/ProductCard'
import * as Realm from "realm-web"
import axios from 'axios';

export default function Gaming() {
    const [products, setProducts] = useState([])
  
    useEffect(async ()=> {
      try {
  
          console.log("iddd");
          axios.post(`http://localhost:4000/api/items/getData`,{data:{category:'Gaming'}}).then(res => {
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
    <div className='gaming'>
    <h1>GAMING</h1>
    </div>
    <ProductCard product={products}/>

    </>
  )
}