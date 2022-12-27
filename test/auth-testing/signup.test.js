import request from "supertest";
import app from "../../src/app";
import mongooseConnect from "../../src/mongooseConnect"
mongooseConnect()

describe("To check the Auth APIs", ()=>{
    test("POST signup api", async()=>{
        // const response = await request(app).post("/api/notes/auth/signup").send({
        //     user_name: "test",
        //     mail: "testtttmail@gmail.com",
        //     password: "testpassword",
        //     confirm_password: "testpassword",
        //   });
        //   expect(response.statusCode).toBe(201);
        //   expect(response._body.message).toBe("user signed up successfully");
        //   expect(response._body.status).toBe("success");
    })
})