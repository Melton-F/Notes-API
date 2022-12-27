import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("POST create notes API", async()=>{
        // const response = await request(app).post("/api/notes/note-works/create-note").send({
        //     Title:"test Notes",
        //     Note:"testing this unit test at office",
        // })
        // expect(response.statusCode).toBe(201)
        // expect(response._body.status).toMatch("Success")
        // expect(response._body.message).toMatch("notes created successfully")
        // expect(response._body.created_note._id).toBeDefined()
        // console.log(response);
    })
})