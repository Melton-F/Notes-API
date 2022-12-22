import express  from "express";
import {showUser, signup, login} from "../controller/authController"
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/current-user/:id', showUser)

module.exports = router