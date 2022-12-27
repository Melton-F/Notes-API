import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Label APIs", ()=>{
    test("POST show label API", async()=>{
        const response = await request(app).get("/api/notes/labels/show-labels").send({});
        expect(response.statusCode).toBe(200)
        expect(response._body.status).toMatch("Success")
        expect(response._body.labels.length).toBeGreaterThanOrEqual(7)
        // console.log(response);
    })
})