import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("GET show notes API", async()=>{
        const response = await request(app).get("/api/notes/note-works/show-notes").send({})

        if(response.statusCode===404){
            expect(response.statusCode).toBe(404)
            expect(response._body.message).toMatch("notes not available")
        }else if(response.statusCode===500){
            expect(response.statusCode).toBe(500)
            expect(response._body.message).toMatch("Fail")
        }else if(response.statusCode===200){
            expect(response.statusCode).toBe(200)
            expect(response._body.status).toMatch("Success")
            expect(response._body.note_counts).toBeGreaterThanOrEqual(1)
        }

    })
})