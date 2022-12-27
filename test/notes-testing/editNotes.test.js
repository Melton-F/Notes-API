import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("PATCH edit notes by id API", async()=>{
        const response = await request(app).patch("/api/notes/note-works/edit-notes/63aaff658b350c03d62f90c2").send({})
        expect(response.statusCode).toBe(201)
        expect(response._body.status).toMatch("success")
        expect(response._body.message).toMatch("notes updated successfully")
        // expect(response._body.updated_notes._id).toBeDefined()
        // console.log(response);
    })
})