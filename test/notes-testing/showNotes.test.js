import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("GET show notes API", async()=>{
        const response = await request(app).get("/api/notes/note-works/show-notes").send({})
        expect(response.statusCode).toBe(200)
        expect(response._body.status).toMatch("Success")
        expect(response._body.note_counts).toBeGreaterThan(2)
        // console.log(response);
    })
})