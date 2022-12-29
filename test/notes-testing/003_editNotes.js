import request from "supertest";
import app from "../../src/app";
require("../../src/mongooseConnect")

// describe("To check the NOTES APIs", ()=>{
//     test("PATCH edit notes by id API", async()=>{
//         const response = await request(app).patch("/api/notes/note-works/edit-notes/63aaff658b350c03d62f90c2").send({
//             Note:"test notes for edit api"
//         })

//         if(response.statusCode===500){
//             expect(response.statusCode).toBe(500),
//             expect(response._body.status).toMatch("Fail")
//         }
//         if(response.statusCode===201){
//             expect(response.statusCode).toBe(201)
//             expect(response._body.status).toMatch("success")
//             expect(response._body.message).toMatch("notes updated successfully")
//         }
//     })
// })

export const editNotes = ()=>{
    test("PATCH edit notes by id API", async()=>{
        const response = await request(app).patch("/api/notes/note-works/edit-notes/63aaff658b350c03d62f90c2").send({
            Note:"test notes for edit api"
        })

        if(response.statusCode===500){
            expect(response.statusCode).toBe(500),
            expect(response._body.status).toMatch("Fail")
        }
        if(response.statusCode===201){
            expect(response.statusCode).toBe(201)
            expect(response._body.status).toMatch("success")
            expect(response._body.message).toMatch("notes updated successfully")
        }
    })
}