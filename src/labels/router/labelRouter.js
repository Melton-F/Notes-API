import express from "express";
const router = express.Router()
import {createLabel, showLabels, updateLabel} from "../controller/labelController"

router.post("/create-label", createLabel)
router.get("/show-labels", showLabels)
router.patch("/update-label/:id", updateLabel)

module.exports = router