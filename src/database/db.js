const mongoose = require("mongoose");

const databasePath = "mongodb://localhost:27017/potterhead";

mongoose.connect(databasePath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("connected with MongoDB database");
  }).catch((e) => {
    console.log(e);
  });