const router = require('express').Router();
const mongoose = require("mongoose");
let payment = require("../models/payment.model");

router.route('/setData')
    .post(async (req, res) => {
        try {
            let requestedata = req.body.data;
            console.log("in set API",req.body);
            
            let query = new payment();
            query.name = requestedata.name;
            query.person_id = requestedata.person_id;
            query.exp= requestedata.exp;
            query.cvv =requestedata.cvv;
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

            let data= await payment.find(requestedata);

            res.send({ status: 200, message: "Data added.", data:data });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });

    router.route('/deleteData')
    .post(async (req, res) => {

            try {
                let requestedata = req.body.data;
                console.log("in set API",requestedata);
    
                let data= await payment.deleteOne(requestedata);
    
                res.send({ status: 200, message: "Data added.", data:data });
            }catch (e) {
                console.log("error in setData" + e.toString());
                res.send({ status: 500, message: "something went wrong" });
              }

    });

module.exports = router;
