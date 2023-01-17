const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/students_api", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });
