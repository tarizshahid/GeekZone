const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart = new Schema(
  {
    product_name:String,
    product_id:{type:Schema.Types.ObjectId, ref:"items"},
    product_price:Number,
    quantity:Number,
    person_id:Schema.Types.ObjectId,
    person_name:String,
    person_phone:String,
    address:String,
    date:String,
    status:String,
    method:String,
    payment_id:Schema.Types.ObjectId
  }
);

module.exports = mongoose.model("cart", cart, "cart");