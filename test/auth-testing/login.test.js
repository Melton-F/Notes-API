import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Auth APIs", ()=>{
    test("POST login api", async()=>{
        const response = await request(app).post("/api/notes/auth/login").send({
            user_name: "test",
            password: "testpassword",
        });
        if(response.statusCode===401){
            expect(response.statusCode).toBe(200)
            expect(response._body.message).toMatch("Auth failed")
        }else if(response.statusCode===404){
            expect(response.statusCode).toBe(200)
            expect(response._body.message).toMatch("user not found")
        }else{
            expect(response.statusCode).toBe(200)
            expect(response._body.message).toBe('Auth successfull')
        }
    })
})