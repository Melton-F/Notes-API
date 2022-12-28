import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Label APIs", ()=>{
    test("POST create label API", async()=>{
        const response = await request(app).post("/api/notes/labels/create-label").send({
            label_name: "test Label"
          });
        if(response.statusCode != 201){
            expect(response.statusCode).toBe(400)
            expect(response._body.status).toBe("Fail")
        }
        else{
            expect(response.statusCode).toBe(201)
            expect(response._body.message).toBe('Label created')
            expect(response._body.status).toBe("Success")
            expect(response._body.label).toBeDefined()
        }
    })
})