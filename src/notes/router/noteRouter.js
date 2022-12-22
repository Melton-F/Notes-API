import express from "express";
const router = express.Router()
import {createNote, showNotes, updateLabel, showNotesByLabel} from "../controller/noteController"

router.post("/create-note", createNote)
router.get("/show-notes", showNotes)
router.patch("/update-labels-in-notes", updateLabel)
router.get("/show-notes-by-label/:id", showNotesByLabel)

module.exports = router