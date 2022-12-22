import express from "express";
const router = express.Router()
import {createLabel, showLabels, editLabels} from "../controller/labelController"

router.post("/create-label", createLabel)
router.get("/show-labels", showLabels)
router.patch("/edit-label/:id", editLabels)

module.exports = router