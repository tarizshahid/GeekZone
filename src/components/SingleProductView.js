import '../App.css'
import Navbar from './Homepage/Navbar'
import Footer from './Footer/footer'
// import './SingleProductView.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
import { rgbToHex } from '@mui/material';
import { useNavigate } from 'react-router-dom';
  


const SingleProductView = () => {
    const [products, setProducts] = useState([])
    const navigate=useNavigate();

    const _id=useParams();
    var product={};

    useEffect(async ()=> {
        try {
    
            console.log("iddd", _id);
            axios.post(`http://localhost:4000/api/items/getData`,{data:{_id:_id.id}}).then(res => {
               product=res.data.data[0];
                console.log("allProducts", product);
            const allProducts=res.data.data[0];
            console.log("allProducts", allProducts);
            setProducts(allProducts);
             } );
    
        } catch (error) {
            console.error(error);
        }
      },[])
    
      const addtocartandbuy = (event,prod) => {
        let cartPrevious=JSON.parse(localStorage.getItem("cart"));
        console.log("xcc",cartPrevious?cartPrevious.item?cartPrevious.item.length>0:false:false,cartPrevious);
        let order;
    
        if(cartPrevious?cartPrevious.item:false){
          order=cartPrevious;
          order.item.push(prod);
        }else{
          order={item:[prod]}
        }
        localStorage.setItem("cart",JSON.stringify(order))
        navigate("../cart")
    
        console.log("ccc",prod);
    
    
    };

      const addtocart = (event,prod) => {
        let cartPrevious=JSON.parse(localStorage.getItem("cart"));

        

        console.log("xcc",cartPrevious?cartPrevious.item?cartPrevious.item.length>0:false:false,cartPrevious);
        let order;
      
        if(cartPrevious?cartPrevious.item:false){
          order=cartPrevious;
          order.item.push(prod);
        }else{
          order={item:[prod]}
        }
        localStorage.setItem("cart",JSON.stringify(order))
         window.alert("Product added to Cart");
      
        console.log("ccc",prod);
      
      
      };
      


  return (
    <div>
        <div className='spv-general'>
        <Navbar/>
 <section className="section-content padding-y bg">


        <div className="container">
    
        <article className="card">
            <div className="card-body">
                    <div className="row">
                        <aside className="col-md-6">
                                <article className="gallery-wrap">
                                    <div className="card img-big-wrap">
                                         <img width="500" height="350" src={products.image||''} />
                                    </div> 
                                    <div className="thumbs-wrap">
                                         <img width="100" height="70" src={products.image||''} />

                                    </div>
                                </article>
                        </aside>
                        <main className="col-md-6">
                            <article>
                                <h5 className="text-primary">{products.category||''}</h5>
                                <h3 className="title">{products.name||''}</h3>
                                <div>
                                    <ul className="rating-stars">
                                        <li>
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <span className="label-rating mr-3 text-muted">{products.review||''}/5</span>
                                </div> 
        
                                <hr />
                    
                                <div className="mb-3">
                                    <h6>Description</h6>
                                    <ul className="list-dots mb-0">
                                        <li>{products.description||''}</li>
                                    </ul>
                                </div>
                                
        
                                <div className="mb-3">
                                    <var className="h4">PRICE: RS.{products.price||''}</var> <br />
                                </div> 
        
                                <div className="mb-4">

                               

                                    <a  onClick={event => addtocartandbuy(event,products)} className="btn btn-primary mr-1">
                                        Buy now</a>
                                    <a  onClick={event => addtocart(event,products)} className="btn btn-light">Add to card</a>
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article className="card mt-5">
            <div className="card-body">
                <hr />
                <p>
                        Our FYP is our life, dont mess with it, we love it. and we also respect you! Thank you
                </p>
            </div> 
        </article>
        </div>
 
    
    </section>
    <Footer/>
    </div>
    </div>
  )
}

export default SingleProductView