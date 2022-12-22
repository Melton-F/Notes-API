import User from '../model/authModel'
import bcrypt from "bcrypt"

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
                user.save()
                res.status(201).json({
                    status: "success",
                    message: "user signed up successfully",
                    created_user: {
                        user_name: user.user_name,
                        mail: user.mail
                    }
                })
            }
        })
    } catch (error) {
        res.send(error.message)
    }
}


export const login = async (req, res)=>{
    try {
        const user = await User.findOne({user_name:req.body.user_name})
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(err){
                    return res.status(401).json({
                        message:"Auth failed"
                    })
                }
                else{
                    res.status(200).json({
                        message:"Auth successfull"
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