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

app.all("*", (req, res, next)=>{
    res.status(400).send("Invalid url")
})

module.exports = app