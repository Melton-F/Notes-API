import express from 'express'
import authRouter from './auth/router/authRouter'
import labelRouter from "./labels/router/labelRouter"
import noteRouter from "./notes/router/noteRouter"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/notes/auth', authRouter)
app.use('/api/notes/labels', labelRouter)
app.use('/api/notes/note-works', noteRouter)

app.post('/test', (req, res)=>{
    const {password, userName} = req.body
    if(!password || !userName){
        return res.status(400).json({message:"message"})
    }
    res.status(200).json({
        message:"user created",
        _id: 0
    })
})

app.all("*", (req, res, next)=>{
    res.send("Invalid url")
})

module.exports = app