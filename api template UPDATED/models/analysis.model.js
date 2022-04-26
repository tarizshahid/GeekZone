const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const analysis = new Schema(
  {
    sale : [
      {
        week1:Number,
        week2:Number,
        week3:Number,
        week4:Number,
      }
    ],
    profit :Number,
    orders:[
      {
        week1:Number,
        week2:Number,
        week3:Number,
        week4:Number,
      }
    ],
    avgval :Number,
    location :
     [
      {
      name:String,
      count:Number
      } 
      ]
  }
);

module.exports = mongoose.model("analysis", analysis, "analysis");