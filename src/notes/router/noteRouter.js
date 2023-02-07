import express from "express";
const router = express.Router()
import { auth } from "../../auth/token-process/token.verify";
import {createNote, showNotes, updateLabel, showNotesByLabel, editNotes, updateTask, deleteNotes} from "../controller/noteController"

router.post("/create-note", auth, createNote)
router.get("/show-notes", auth, showNotes)
router.patch("/update-labels-in-notes", auth, updateLabel)
router.get("/show-notes-by-label/:id", auth, showNotesByLabel)
router.patch("/edit-notes/:id", auth, editNotes)
router.patch("/update-task-in-notes", auth, updateTask)
router.delete("/delete-note/:id", auth, deleteNotes)

module.exports = router