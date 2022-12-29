import request from "supertest";
import app from "../../src/app";
require("../../src/mongooseConnect")

// describe("To check the Label APIs", ()=>{
//     test("DELETE label API", async()=>{
        
//         const response = await request(app).delete("/api/notes/labels/delete-label/test").send({})
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
//             expect(response._body.message).toMatch("notes deleted successfully")
//         }
//     })

// })

export const deleteLabel = ()=>{
    test("DELETE label API", async()=>{
        
        const response = await request(app).delete("/api/notes/labels/delete-label/test").send({})
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
            expect(response._body.message).toMatch("notes deleted successfully")
        }
    })
    
}