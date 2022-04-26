const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payment = new Schema(
  {
    name: String,
    number : String,
    exp:String,
    cvv:String,
  }
);

module.exports = mongoose.model("payment", payment, "payment");