import React from "react";
import "./addProduct.css";

export default function App() {
  return (
    <>
    <h1>GeekZone</h1>
    <h1>ADD PRODUCT</h1>
    <div class="form-container">
      <form class="register-form">
        <input
          id="product-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="firstName"
        />
        <input
          id="product-price"
          class="form-field"
          type="text"
          placeholder="Price"
          name="lastName"
        />
        <h2>Add Image:</h2>
        <input type="file" id="myFile" name="filename" class='image-button'/>
        <button class="form-field" type="submit">
          ADD
        </button>
      </form>
    </div>
    </>
  );
}
