const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connecting to database...");
  return mongoose
    .connect(url)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
