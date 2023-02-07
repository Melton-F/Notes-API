import request from "supertest";
import app from "../../src/app";
// require("../../src/mongooseConnect")


// describe("To check the Auth APIs", ()=>{
//     test("POST signup api", async()=>{
//         const response = await request(app).post("/api/notes/auth/signup").send({
//             user_name: "test",
//             mail: "testtttmail@gmail.com",
//             password: "testpassword",
//             confirm_password: "testpassword",
//           });
          
//           if(response.statusCode!=201){
//             expect(response.statusCode).toBe(500)
//           }else{
//             expect(response.statusCode).toBe(201);
//             expect(response._body.message).toBe("user signed up successfully");
//             expect(response._body.status).toBe("success");
//           }
//     })
// })


export const signup = ()=>{
  test("POST signup api", async()=>{
    // console.log(app, "this is app");
    const response = await request(app).post("/api/notes/auth/signup").send({
        user_name: "test",
        mail: "testtttmail@gmail.com",
        password: "testpassword",
        confirm_password: "testpassword",
      });
      console.log(response);
      
      if(response.statusCode!=201){
        expect(response.statusCode).toBe(400)
      }else{
        expect(response.statusCode).toBe(201);
        expect(response._body.message).toBe("user signed up successfully");
        expect(response._body.status).toBe("success");
      }
})
}

