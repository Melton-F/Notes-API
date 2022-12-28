import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("PATCH show notes API", async()=>{
        const response = await request(app).patch("/api/notes/note-works/update-labels-in-notes").send({
            labelId:"63a52b9ca1f2e0e202a6405b",
            notesId:"63aafea1c1d0c0a488a436b9"
        })
        
        if(response.status === 201){
            expect(response.statusCode).toBe(201)
            expect(response._body.status).toMatch("Success")
            expect(response._body.message).toMatch("label added in your notes successfully")
        }
        if(response.status === 400){
            expect(response.statusCode).toBe(400)
            expect(response._body.message).toMatch("Sorry... label already exists in your notes")
        }
        if(response.status === 500){
            expect(response.statusCode).toBe(500)
            expect(response._body.status).toMatch("Fail")
        }
        
    })
})