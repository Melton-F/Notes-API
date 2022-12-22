import express from "express";
const router = express.Router()
import {createLabel, showLabels} from "../controller/labelController"

router.post("/create-label", createLabel)
router.get("/show-labels", showLabels)

module.exports = router