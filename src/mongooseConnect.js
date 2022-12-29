import mongoose from "mongoose";
require("dotenv").config();
// const connectFunction = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection
    .once("open", () => {
      // console.log("DB connected");
    })
    .on("error", (error) => {
      console.log("error is:", error);
    });
// };

module.exports = mongoose;
