import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Label APIs", ()=>{
    test("PATCH edit label API", async()=>{
        const response = await request(app).patch("/api/notes/labels/edit-label/63a52b9ca1f2e0e202a6405b").send({
            label_name: "tester melton unit testing"
        });
        if(response.statusCode===500){
            expect(response.statusCode).toBe(500),
            expect(response._body.status).toMatch("Fail")
        }else if(response.statusCode===201){
            expect(response.statusCode).toBe(201)
            expect(response._body.status).toMatch("Success")
            expect(response._body.message).toMatch("Successfully updated")
        }else if(response.statusCode===404){
            expect(response.statusCode).toBe(404)
            expect(response._body.message).toMatch("Id unavailabe or unknown id")
        }
        
    })
})
