import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    Title: {
        type:String
    },
    Note: {
        type:String
    },
    labelId: [{
        type:String
    }]
}, {versionKey:false})

const note = mongoose.model("note", noteSchema)
module.exports = note