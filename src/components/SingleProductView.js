import '../App.css'
import Navbar from './Homepage/Navbar'
import Footer from './Footer/footer'
// import './SingleProductView.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
  


const SingleProductView = () => {

    const id=useParams();




    useEffect(async ()=> {
        try {
    
            console.log("iddd", id);
            axios.post(`http://localhost:4000/api/person/getData`,{_id:'id'}).then(res => {
                let r=res.data.data
                console.log("allProducts", r);
                 
             } );
    
        } catch (error) {
            console.error(error);
        }
      },[])
    
    
    const addtocart = (event) => {
         
        console.log("ccc");
    
    
    };
    


  return (
    <div>
        <Navbar/>
 <section className="section-content padding-y bg">
        <div className="container">
    
        <article className="card">
            <div className="card-body">
                    <div className="row">
                        <aside className="col-md-6">
                                <article className="gallery-wrap">
                                    <div className="card img-big-wrap">
                                        <a href="#"> <img src="assets/images/items/3.jpg" /></a>
                                    </div> 
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb"> <img src="assets/images/items/3.jpg" /></a>

                                    </div>
                                </article>
                        </aside>
                        <main className="col-md-6">
                            <article>
                                <a href="#" className="text-primary btn-link">Clothes</a>
                                <h3 className="title">Great product name goes here {'id'}</h3>
                                <div>
                                    <ul className="rating-stars">
                                        <li  className="stars-active"> 
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i>  
                                            
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <span className="label-rating mr-3 text-muted">7/10</span>
                                    <a href="#" className="btn-link  mr-3 text-muted"> <i className="fa fa-heart"></i> Save for later </a>
                                    <a href="#" className="btn-link text-muted"> <i className="fa fa-book-open"></i> Compare </a>
                                </div> 
        
                                <hr />
                    
                                <div className="mb-3">
                                    <h6>Short description</h6>
                                    <ul className="list-dots mb-0">
                                        <li>Made in Russia</li>
                                        <li>Wolf leather </li>
                                        <li>Rubber material bottom</li>
                                        <li>Dark blue color</li>
                                    </ul>
                                </div>
                                
                                <div className="form-group">
                                    <label className="text-muted">Available sizes</label>
                                    <div>
                                        <label className="js-check btn btn-check active mr-1">
                                            <input type="radio" name="option_size" value="option1" checked="" />
                                            <span>Small</span>
                                        </label>
                                        <label className="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Medium</span>
                                        </label>
                                        <label className="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span>Large</span>
                                        </label>
                                        <label className="js-check btn btn-check disabled">
                                            <input type="radio" name="option_size" disabled="" value="option1" />
                                            <span>Babies</span>
                                        </label>  
                                    </div>            
                                </div>
        
                                <div className="mb-3">
                                    <var className="price h4">$230.00</var> <br />
                                    <span className="monthly">$32.00 / monthly <a href="#" className="btn-link">installment </a></span>
                                </div> 
        
                                <div className="mb-4">

                               

                                    <a href="#" className="btn btn-primary mr-1">
                                        Buy now</a>
                                    <a  onClick={addtocart} className="btn btn-light">Add to card</a>
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article className="card mt-5">
            <div className="card-body">
                <div className="row">
                    <aside className="col-md-6">
                        <h5>Parameters</h5>
                        <dl className="row">
                              <dt className="col-sm-3">Display</dt>
                              <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
        
                              <dt className="col-sm-3">Processor</dt>
                              <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
        
                              <dt className="col-sm-3">Camera</dt>
                              <dd className="col-sm-9">720p FaceTime HD camera</dd>
        
                              <dt className="col-sm-3">Memory</dt>
                              <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                              
                              <dt className="col-sm-3">Graphics</dt>
                              <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                        </dl>
                    </aside>
                    <aside className="col-md-6">
                        <h5>Features</h5>
                        <ul className="list-check">
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                            <li>Amazing features and high quality</li>
                            <li>Best performance of battery</li>
                            <li>5 years warranty for this product</li>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> 
        </article>
        </div>
        
    
    </section>
    <Footer/>
    </div>

  )
}

export default SingleProductView