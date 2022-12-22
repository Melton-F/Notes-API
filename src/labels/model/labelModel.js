import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
    label_name : {
        type:String
    }
}, {versionKey:false})

const label =  mongoose.model("label", labelSchema)
module.exports = label