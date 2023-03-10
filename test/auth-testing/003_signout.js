import request from "supertest";
import app from "../../src/app";
// require("../../src/mongooseConnect")

// describe("To check the Auth APIs", ()=>{
//     test("POST login api", async()=>{
//         const response = await request(app).post("/api/notes/auth/sign-out").send({
//             user_name: "test"
//         })

//         if(response.statusCode!=200){
//             expect(response.statusCode).toBe(500)
//         }else{
//             expect(response.statusCode).toBe(200)
//             expect(response._body.message).toBe('Signed out successfully')
//         }
//     })
// })

export const signout = ()=>{
    test("POST signout api", async()=>{
        const response = await request(app).post("/api/notes/auth/sign-out").send({
            user_name: "test"
        })

        if(response.statusCode!=200){
            expect(response.statusCode).toBe(500)
        }else{
            expect(response.statusCode).toBe(200)
            expect(response._body.message).toBe('Signed out successfully')
        }
    })
}