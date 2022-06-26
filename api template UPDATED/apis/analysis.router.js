const router = require('express').Router();
const mongoose = require("mongoose");
let analysis = require("../models/analysis.model");

router.route('/setData')
    .post(async (req, res) => {
        try {
            let requestedata = req.body.data;
            console.log("in set API",req.body);
            
            let query = new analysis();
            query.name = requestedata.name;

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

            let data= await analysis.find(requestedata);

            res.send({ status: 200, message: "Data added.", data:data });
        }catch (e) {
            console.log("error in setData" + e.toString());
            res.send({ status: 500, message: "something went wrong" });
          }
        
    });

module.exports = router;
