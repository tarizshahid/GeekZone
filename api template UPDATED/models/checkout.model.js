const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkout = new Schema(
  {
    Fname: String,
    Lname: String,
    address : String,
    city:String,
    province:String,
    zipcode:String,
    coutry:String,

  }
);

module.exports = mongoose.model("checkout", checkout, "checkout");