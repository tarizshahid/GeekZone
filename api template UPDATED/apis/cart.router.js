const router = require('express').Router();
const mongoose = require("mongoose");
let cart = require("../models/cart.model");

router.route('/setData')
    .post(async (req, res) => {
        try {
            let requestedata = req.body.data;
            console.log("in set API",req.body);
            
            let query = new cart();

            query.product_name= requestedata.product_name;
            query.product_id= requestedata.product_id;
            query.product_price= requestedata.product_price;
            query.quantity= requestedata.quantity;
            if(requestedata.person_id)
            query.person_id= requestedata.person_id;
            query.person_name= requestedata.person_name;
            query.date= requestedata.date;
            query.address= requestedata.address;
            query.status= requestedata.status;
            query.method= requestedata.method;

            query.save();

            res.send({ status: 200, message: "Data added.", data:query });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
    });

    router.route('/getData')
    .post(async (req, res) => {
        console.log("in get API");
        try {
            let requestedata = req.body.data;
            console.log("in set API");

            let data= await cart.find(requestedata).populate("product_id");

            res.send({ status: 200, message: "Data added.", data:data });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });
    router.route('/updatequantity')
    .post(async (req, res) => {
        console.log("in get updatequantity");
        try {
            let requestedata = req.body.data;
            console.log("in set updatequantity",requestedata);

            let dataprev= await cart.findOne({_id:requestedata._id})


            let data= await cart.findOneAndUpdate({_id:requestedata._id},
                {
                 $set:{
                    quanity:dataprev.quantity-requestedata.quantity
                 }   
                });

            res.send({ status: 200, message: "Data added.", data:data });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });
    
module.exports = router;
