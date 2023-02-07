import request from "supertest";
import app from "../../src/app";
// require("../../src/mongooseConnect")

// describe("To check the NOTES APIs", ()=>{
//     test("DELETE delete or remove notes API", async()=>{
//         const response = await request(app).delete("/api/notes/note-works/delete-note/63aaffc7e7c96ab524b669f8").send({})
//         if(response.statusCode === 404){
//             expect(response.statusCode).toBe(404)
//             expect(response._body.message).toMatch("data has been deleted already")
//         }
//         if(response.statusCode === 500){
//             expect(response.statusCode).toBe(500)
//             expect(response._body.status).toMatch("Fail")
//         }
//         if(response.statusCode === 200){
//             expect(response.statusCode).toBe(200)
//             expect(response._body.status).toMatch("Success")
//             expect(response._body.message).toMatch("label deleted successfully")
//         }
//     })
// })

export const deleteNotes = ()=>{
    test("DELETE delete or remove notes API", async()=>{
        const response = await request(app).delete("/api/notes/note-works/delete-note/63aaffc7e7c96ab524b669f8").send({})
        if(response.statusCode === 404){
            expect(response.statusCode).toBe(404)
            expect(response._body.message).toMatch("data has been deleted already")
        }
        if(response.statusCode === 500){
            expect(response.statusCode).toBe(500)
            expect(response._body.status).toMatch("Fail")
        }
        if(response.statusCode === 200){
            expect(response.statusCode).toBe(200)
            expect(response._body.status).toMatch("Success")
            expect(response._body.message).toMatch("label deleted successfully")
        }
    })
}