const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const items = new Schema(
  {
    category:String,
    description:String,
    image:String,
    name:String,
    price:Number,
    quantity:Number,
    review:Number


  }
);

module.exports = mongoose.model("items", items, "items");