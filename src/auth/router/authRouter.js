import express  from "express";
import {showUser, signup, login, signOut} from "../controller/authController"
import { auth } from "../token-process/token.verify";
const router = express.Router()

router.post('/signup', signup)
router.post('/login', auth, login)
router.post('/sign-out', auth, signOut)
router.get('/current-user/:id', auth, showUser)

module.exports = router