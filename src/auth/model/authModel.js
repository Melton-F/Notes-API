import mongoose from "mongoose";
import validator from "validator";

const userAuthSchema = new mongoose.Schema({
    user_name: {
        type:String
    },
    mail: {
        type:String,
        unique:true,
        required:true
    },
    password:{ 
        type:String,
        required:true,
        minlength:[8, 'Password must have atleast eight characters'],
    },
    confirm_password: {
        type:String,
        required:true,
        minlength:[8, 'Password must have atleast eight characters'],
        // validate:{
        //     //works only when we creating(create & save) new user details never on update
        //     validator: function(cnfrmPswd){
        //         return cnfrmPswd === this.password
        //     },
        //     message:'passwords are not same'
        // }
    },
    logged_in:{
        type:Boolean,
        default:false
    }

}, {versionKey:false})

const userAuth = mongoose.model("user", userAuthSchema)


module.exports = userAuth