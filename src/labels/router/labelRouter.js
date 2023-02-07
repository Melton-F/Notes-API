import express from "express";
const router = express.Router()
import { auth } from "../../auth/token-process/token.verify";
import {createLabel, showLabels, editLabels, deleteLabel, showLabelsBySearch} from "../controller/labelController"

router.post("/create-label", auth, createLabel)
router.get("/show-labels", auth, showLabels)
router.get("/search-labels", auth, showLabelsBySearch)
router.patch("/edit-label/:id", auth, editLabels)
router.delete("/delete-label/:label_name", auth, deleteLabel)

module.exports = router