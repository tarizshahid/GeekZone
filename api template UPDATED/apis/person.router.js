const router = require('express').Router();
const { request } = require('express');
const mongoose = require("mongoose");
let person = require("../models/person.model");

router.route('/setData')
    .post(async (req, res) => {
        try {
            let requestedata = req.body;
            console.log("in set API",req.body);
            
            let query = new person();
            query.Fname = requestedata.firstName;
            query.Lname = requestedata.lastName;
            query.email = requestedata.email
            query.pass = requestedata.password

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
            let requestedata = req.body;
            console.log("in set API", req.body);

            let data= await person.findOne({email: req.body.email , pass : req.body.password});
            if(data){ 
                res.send({ status: 200, message: "Email Found", data:data }); 
              }else{
                res.send({ status: 500, message: "Email Not Found", data:data }); 
              }
             }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });

module.exports = router;
