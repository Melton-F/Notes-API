import express  from "express";
import {showUser, signup, login, signOut} from "../controller/authController"
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/sign-out/:user_name', signOut)
router.get('/current-user/:id', showUser)

module.exports = router