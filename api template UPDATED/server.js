let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let fileUpload = require("express-fileupload");
const cors = require('cors');
const morgan = require('morgan');
const db =require('./db');



let app = express();

app.get('/', (req, res) => {
    res.send({status:200, message: 'you are on Tariz api'});
});


app.use(morgan('dev'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/api/analysis", require("./apis/analysis.router"));
app.use("/api/items", require("./apis/items.router"));
app.use("/api/person", require("./apis/person.router"));
app.use("/api/cart", require("./apis/cart.router"));
app.use("/api/payment", require("./apis/payment.router"));
app.use("/api/checkout", require("./apis/checkout.router"));





app.use(express.static(path.join(__dirname, "public")));


let server = app.listen(4000, function () {
    console.log("Express server listening on port " + 4000);

});

app.get("*", (req, res) => {
    res.send({status: 404, message: 'This url does not exists'});
});

