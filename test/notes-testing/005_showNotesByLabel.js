import request from "supertest";
import app from "../../src/app";
require("../../src/mongooseConnect")

// describe("To check the NOTES APIs", ()=>{
//     test("GET show notes by label API", async()=>{
//         const response = await request(app).get("/api/notes/note-works/show-notes-by-label/63a43ca484d629fb772be477").send({})

//         if(response.statusCode===404){
//             expect(response.statusCode).toBe(404)
//             expect(response._body.message).toMatch("no notes found in this label")
//         }
//         if(response.statusCode===500){
//             expect(response.statusCode).toBe(500)
//             expect(response._body.status).toMatch("Fail")
//         }
//         if(response.statusCode===200){
//             expect(response.statusCode).toBe(200)
//             expect(response._body.status).toMatch("success")
//             expect(response._body.note_counts).toBeGreaterThanOrEqual(1)
//         }

//     })
// })

export const showNotesByLabel = ()=>{
    test("GET show notes by label API", async()=>{
        const response = await request(app).get("/api/notes/note-works/show-notes-by-label/63a43ca484d629fb772be477").send({})

        if(response.statusCode===404){
            expect(response.statusCode).toBe(404)
            expect(response._body.message).toMatch("no notes found in this label")
        }
        if(response.statusCode===500){
            expect(response.statusCode).toBe(500)
            expect(response._body.status).toMatch("Fail")
        }
        if(response.statusCode===200){
            expect(response.statusCode).toBe(200)
            expect(response._body.status).toMatch("success")
            expect(response._body.note_counts).toBeGreaterThanOrEqual(1)
        }

    })
}