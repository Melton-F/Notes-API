import http from 'http'
import app from './app'
// import mongoose from 'mongoose'
import mongooseConnection from './mongooseConnect'
require("dotenv").config();

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// }
// mongoose.connect(process.env.MONGO_URL);
// mongoose.connection
//   .once("open", () => {
//     console.log("DB connected");
//   })
//   .on("error", (error)=> {
//     console.log("error is:", error);
//   });
mongooseConnection()

const PORT = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`server listening port of ${PORT}`);
})