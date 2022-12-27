import Note from "../src/notes/model/noteModel"
import request from "supertest"
import app from "../src/app"



// describe("note controller functions test", ()=>{
//     describe("show notes", ()=>{
//         test("should return the status code of 200",async ()=>{
//             const response = await request(app).post("/test").send({
//                 userName: "melton",
//                 password: "password"
//             })
//             expect(response.statusCode).toBe(200)
//         })

//         test("should specify header content",async ()=>{
//             const response = await request(app).post("/test").send({
//                 userName: "melton",
//                 password: "password"
//             })
//             expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//         })

//         test("should have an id as 0",async ()=>{
//             const response = await request(app).post("/test").send({
//                 userName: "melton",
//                 password: "password"
//             })
//             expect(response.body._id).toEqual(0)
//         })

//         test("when username password is missing",async ()=>{
//             const response = await request(app).post("/test").send({
//                 userName: "melton"
//             })
//             expect(response.statusCode).toBe(400)
//         })


//     })
// })

describe("GET notes", ()=>{
    test("should return all notes", async(done)=>{
        const response =  await request(app).get("/api/notes/note-works/show-notes").send({
            
        })
        console.log(response);
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBeGreaterThan(0)
        done()
    }, )
})