import jwt from 'jsonwebtoken';
require("dotenv").config();

export const tokenGenerator = (user)=>{
    const payload = {
        id:user.id,
        email:user.mail,
        name:user.user_name,
        time:Date.now()
    }
    const token = jwt.sign(payload, process.env.SECRETKEY)
    return token
}