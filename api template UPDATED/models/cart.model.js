const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart = new Schema(
  {
    products: [
        {
          productId: Number,
          quantity: Number,
          name: String,
          price: Number
        }
      ]


  }
);

module.exports = mongoose.model("cart", cart, "cart");