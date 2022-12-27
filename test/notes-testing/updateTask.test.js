import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("PATCH update task in notes API", async()=>{
        const response = await request(app).patch("/api/notes/note-works/update-task-in-notes").send({
            notes_id:"63aafea1c1d0c0a488a436b9",
            add_task:"test task in add task"
        })
        expect(response.statusCode).toBe(201)
        expect(response._body.status).toMatch("success")
        expect(response._body.message).toMatch("task updated successfully in this notes")
        expect(response._body.updated_notes._id).toBeDefined()
        // console.log(response);
    })
})