const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const person = new Schema(
  {
    Fname: String,
    Lname: String,
    email : String,
    pass:String,
    id: Number
  }
);

module.exports = mongoose.model("person", person, "person");