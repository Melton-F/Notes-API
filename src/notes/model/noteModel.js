import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    Title: {
        type:String,
        required:true
    },
    Note: {
        type:String
    },
    labelId: [{
        type:String
    }],
    task: [{
        type:String
    }]
}, {versionKey:false})

const note = mongoose.model("note", noteSchema)
module.exports = note