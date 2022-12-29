import request from "supertest";
import app from "../../src/app";
require("../../src/mongooseConnect")

// describe("To check the NOTES APIs", ()=>{
//     test("POST create notes API", async()=>{
//         const response = await request(app).post("/api/notes/note-works/create-note").send({
//             Title:"test Notes",
//             Note:"testing this unit test at office",
//         })
//         if(response.statusCode===500){
//             expect(response.statusCode).toBe(500)
//             expect(response._body.status).toMatch("Fail")
//         }
//         if(response.statusCode===201){
//             expect(response.statusCode).toBe(201)
//             expect(response._body.status).toMatch("Success")
//             expect(response._body.message).toMatch("notes created successfully")
//             expect(response._body.created_note._id).toBeDefined()
//         }
        
//     })
// })

export const createNote = ()=>{
    test("POST create notes API", async()=>{
        const response = await request(app).post("/api/notes/note-works/create-note").send({
            Title:"test Notes",
            Note:"testing this unit test at office",
        })
        if(response.statusCode===500){
            expect(response.statusCode).toBe(500)
            expect(response._body.status).toMatch("Fail")
        }
        if(response.statusCode===201){
            expect(response.statusCode).toBe(201)
            expect(response._body.status).toMatch("Success")
            expect(response._body.message).toMatch("notes created successfully")
            expect(response._body.created_note._id).toBeDefined()
        }
        
    })
}