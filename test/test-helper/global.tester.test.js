require("../../src/mongooseConnect")
import {signup} from "../auth-testing/001_signup"
import {login} from "../auth-testing/002_login"
import {signout} from "../auth-testing/003_signout"
import {createLabel} from "../label-testing/001_createLabel"
import {showLabels} from "../label-testing/002_showLabels"
import {editLabel} from "../label-testing/003_editLabels"
import {deleteLabel} from "../label-testing/004_deleteLabel"
import {createNote} from "../notes-testing/001_createNote"
import {showNotes} from "../notes-testing/002_showNotes"
import {editNotes} from "../notes-testing/003_editNotes"
import {addLabelInNotes} from "../notes-testing/004_updateNotesAddLabel"
import {showNotesByLabel} from "../notes-testing/005_showNotesByLabel"
import {updateTask} from "../notes-testing/006_updateTask"
import {deleteNotes} from "../notes-testing/007_deleteNotes"



describe("To check the Auth APIs", ()=>{
    describe("signup", signup)
    describe("login", login)
    describe("signout", signout)
})

describe("To check the Label APIs", ()=>{
    describe("create label", createLabel)
    describe("show labels", showLabels)
    describe("edit label", editLabel)
    describe("delete label", deleteLabel)
})

describe("To check the NOTES APIs", ()=>{
    describe("create notes", createNote)
    describe("show notes", showNotes)
    describe("edit notes", editNotes)
    describe("add labels in notes", addLabelInNotes)
    describe("show notes by label", showNotesByLabel)
    describe("update task", updateTask)
    describe("delete notes", deleteNotes)
})