const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/sample", { useNewUrlParser: true })
  .then(() => {
    console.log("db Connection succcessful");
  })
  .catch((error) => {
    console.log(error);
  });
