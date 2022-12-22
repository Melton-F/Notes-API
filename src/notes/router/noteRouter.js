import express from "express";
const router = express.Router()
import {createNote, showNotes, updateLabel, showNotesByLabel, editNotes, updateTask, deleteNotes} from "../controller/noteController"

router.post("/create-note", createNote)
router.get("/show-notes", showNotes)
router.patch("/update-labels-in-notes", updateLabel)
router.patch("/update-task-in-notes", updateTask)
router.get("/show-notes-by-label/:id", showNotesByLabel)
router.patch("/edit-notes/:id", editNotes)
router.delete("/delete-note/:id", deleteNotes)

module.exports = router