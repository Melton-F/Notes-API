import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("GET show notes by label API", async()=>{
        const response = await request(app).get("/api/notes/note-works/show-notes-by-label/63a43ca484d629fb772be477").send({})
        expect(response.statusCode).toBe(200)
        expect(response._body.status).toMatch("success")
        expect(response._body.note_counts).toBeGreaterThanOrEqual(1)
        // console.log(response);
    })
})