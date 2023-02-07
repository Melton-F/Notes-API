import User from '../model/authModel'
import bcrypt from "bcrypt"
import { tokenGenerator } from '../token-process/token.generator';


export const signup = (req, res, next)=>{
    try {
        bcrypt.hash(req.body.password, 10, (error, hash)=>{
            if(error){
                res.status(500).json({
                    error:error
                })
            }
            else{
                const user = new User({
                    user_name:req.body.user_name,
                    mail:req.body.mail,
                    password:hash,
                    confirm_password:req.body.confirm_password
                })
                user.auth_token = tokenGenerator(user)
                user.save()
                res.status(201).json({
                    status: "success",
                    message: "user signed up successfully",
                    created_user: {
                        user_name: user.user_name,
                        mail: user.mail,
                        token: user.auth_token
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export const login = async (req, res)=>{
    try {
        const user = await User.findOne({user_name:req.body.user_name})
        if(user){
            bcrypt.compare(req.body.password, user.password, async (err, result)=>{
                if(err){
                    return res.status(401).json({
                        message:"please enter the valid password"
                    })
                }
                else{
                    await User.findOneAndUpdate({user_name:req.body.user_name}, {logged_in:true}, {new:true})
                    res.status(200).json({
                        message:"logged in successfully"
                    })
                }
            })
        }
        else{
            res.status(404).json({
                message:"user not found"
            })
        }
    } catch (error) {
        res.send(error.message)
    }
}

export const signOut = async(req,res)=>{
    try {
        await User.findOneAndUpdate({user_name:req.body.user_name}, {logged_in:false}, {new:true})
        res.status(200).json({
            message:"Signed out successfully"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const showUser = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({
                message:"data not found" 
            })
        }
        res.status(404).json({
            user:{
                user_name:user.user_name,
                mail:user.mail
            }
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}