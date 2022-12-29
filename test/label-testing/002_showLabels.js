import request from "supertest";
import app from "../../src/app";
require("../../src/mongooseConnect")

// describe("To check the Label APIs", ()=>{
//     test("POST show label API", async()=>{
//         const response = await request(app).get("/api/notes/labels/show-labels").send({});

//         if(response.statusCode===404){
//             expect(response.statusCode).toBe(404)
//             expect(response._body.message).toMatch("labels not found")
//         }
//         if(response.statusCode===400){
//             expect(response.statusCode).toBe(400)
//             expect(response._body.message).toMatch("Fail")
//         }
//         if(response.statusCode===200){
//             expect(response.statusCode).toBe(200)
//             expect(response._body.status).toMatch("Success")
//             expect(response._body.label_counts).toBeGreaterThanOrEqual(1)
//         }

//     })
// })

export const showLabels = ()=>{
    test("POST show labels API", async()=>{
        const response = await request(app).get("/api/notes/labels/show-labels").send({});

        if(response.statusCode===404){
            expect(response.statusCode).toBe(404)
            expect(response._body.message).toMatch("labels not found")
        }
        if(response.statusCode===400){
            expect(response.statusCode).toBe(400)
            expect(response._body.message).toMatch("Fail")
        }
        if(response.statusCode===200){
            expect(response.statusCode).toBe(200)
            expect(response._body.status).toMatch("Success")
            expect(response._body.label_counts).toBeGreaterThanOrEqual(1)
        }
        
    })
}