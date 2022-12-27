import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the NOTES APIs", ()=>{
    test("DELETE delete or remove notes API", async()=>{
        const response = await request(app).delete("/api/notes/note-works/delete-note/63aaffc7e7c96ab524b669f8").send({})
        expect(response.statusCode).toBe(200)
        expect(response._body.message).toMatch("deleted successfully")
        // console.log(response);
    })
})