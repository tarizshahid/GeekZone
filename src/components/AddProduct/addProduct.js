import React from "react";
import "./addProduct.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate=useNavigate();

  const submits = (event) => {
    console.log("sdfdf");
     
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("qwqwe");
    
    const itemdata = {
      name :  data.get('name'),
      category:  data.get('category'),
      description:  data.get('description'),
      image:  data.get('image'),
      price:  data.get('price'),
      quantity:  data.get('quantity'),
      review:  3
    };
    console.log("xzxc");

    axios.post(`http://localhost:4000/api/items/setData`,{data:itemdata}).then(res => {
      if(res.data.data){
        console.log("resss",res.data.data );
        navigate("../dashboard/products")

      }
   } );
  };



  return (
    <>
    <div className="addprod-general">
    <div className="addprod-body">
      <div className="addprodhd">
    <h1>GeekZone</h1>
    </div>
    <div className="addprod-hd">
    <h1>ADD PRODUCT</h1>
    </div>
    <div className="addprod-form-container">
      <form onSubmit={submits} className="addprod-register-form">
        <div className="addProd-field">
        <div className="addprod-dropdown">
  <h3>Category</h3>
  <div className="addprod-dropdown-size">
  <div className="addProd-field">
  <select name="category" >
        <option value="Drones">Drones</option>
        <option value="Mobile Gadgets">Mobile Gadgets</option>
        <option value="Health">Health</option>
        <option value="Office">Office</option>
        <option value="Gaming">Gaming</option>
        </select>
      </div>
      </div>
 
 </div>
        </div>
        <div className="addProd-field">
        <input
          id="product-price"
          class="form-field"
          type="text"
          placeholder="Description"
          name="description"
        />
        </div>
        <div className="addProd-field">
        <input
          id="product-name"
          class="form-field"
          type="text"
          placeholder="Image URL"
          name="image"
        />
        </div>
        <div className="addProd-field">
        <input
          id="product-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        </div>
        <div className="addProd-field">
        <input
          id="product-name"
          class="form-field"
          type="text"
          placeholder="Price PKR"
          name="price"
        />
        </div>
        <div className="addProd-field">
        <input
          id="product-name"
          class="form-field"
          type="text"
          placeholder="Quantity"
          name="quantity"
        />
        </div>
        <button className="addprod-field" type="submit" >
          ADD
        </button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
}
