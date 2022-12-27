import express from "express";
const router = express.Router()
import {createLabel, showLabels, editLabels, deleteLabel} from "../controller/labelController"

router.post("/create-label", createLabel)
router.get("/show-labels", showLabels)
router.patch("/edit-label/:id", editLabels)
router.delete("/delete-label/:label_name", deleteLabel)

module.exports = router