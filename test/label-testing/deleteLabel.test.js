import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Label APIs", ()=>{
    test("DELETE label API", async()=>{
        const response = await request(app).delete("/api/notes/labels/delete-label/test").send({})
        expect(response.statusCode).toBe(200)
        expect(response._body.status).toMatch("Success")
        expect(response._body.message).toMatch("label deleted successfully")
    })
})