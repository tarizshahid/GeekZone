const router = require('express').Router();
const mongoose = require("mongoose");
let checkout = require("../models/checkout.model");

router.route('/setData')
    .post(async (req, res) => {
        try {
            let requestedata = req.body; 
            console.log("in set API",req.body);
            
            let query = new checkout();
            query.Fname = requestedata.firstName;
            query.Lname = requestedata.lastName;
            query.address = requestedata.address;
            query.city = requestedata.city;
            query.province = requestedata.province;
            query.zipcode = requestedata.zipcode
            query.country    = requestedata.country

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

            let data= await checkout.find(requestedata);

            res.send({ status: 200, message: "Data added.", data:data });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });

module.exports = router;
