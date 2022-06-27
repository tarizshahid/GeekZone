const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payment = new Schema(
  {
    name: String,
    person_id : Schema.Types.ObjectId,
    exp:String,
    cvv:String,
  }
);

module.exports = mongoose.model("payment", payment, "payment");