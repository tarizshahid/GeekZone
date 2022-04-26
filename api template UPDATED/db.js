const mongoose = require("mongoose");
const promiseRetry = require("promise-retry");

const mongooseOptions = {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

promiseRetry(function (retry, number) {
  console.log("DB connection : ", number);
  return mongoose.connect('mongodb+srv://mianshabrez:pakistan123@geekzone-cluster-1.29655.mongodb.net/test', mongooseOptions).catch(retry);

});

let db = mongoose.connection;

db.on("error", (err) => {
  console.log("error in connectionn of DB" + err.message.toString());
});
db.once("open", function () {
  console.log("Yoohoo  DB Connected Succesfully");
});

module.exports = mongoose;
