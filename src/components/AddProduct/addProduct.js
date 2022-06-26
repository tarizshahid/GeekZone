import React from "react";
import "./addProduct.css";

export default function AddProd() {
  return (
    <>
    <h1>GeekZone</h1>
    <h1>ADD PRODUCT</h1>
    <div className="prodBackground">
      
    <div class="Prodform-container ">
      <form class="Prodregister-form">
        <input
          id="product-name"
          className="Prodform-field"
          type="text"
          placeholder="Name"
          name="firstName"
          value="Name"
        />
        <input
          id="product-price"
          className="Prodform-field"
          type="text"
          placeholder="Price"
          name="lastName"
          value="Price"
        />
        <h2 className="ProductTextStyle">Add Image:</h2>
        <input type="file" id="myFile" name="filename" className='Prodimage-button '/>
        <button className="Prodform-field" type="submit">
          ADD
        </button>
      </form>
    </div>
    
    </div>
    </>
  );
}
