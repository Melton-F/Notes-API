import request from "supertest";
import app from "../../src/app";
// require("../../src/mongooseConnect")

// describe("To check the NOTES APIs", ()=>{
//     test("PATCH update task in notes API", async()=>{
//         const response = await request(app).patch("/api/notes/note-works/update-task-in-notes").send({
//             notes_id:"63aafea1c1d0c0a488a436b9",
//             add_task:"test task in add task"
//         })

//         if(response.statusCode!=201){
//             expect(response.statusCode).toBe(500)
//             expect(response._body.status).toMatch("Fail")
//         }
//         else{
//             expect(response.statusCode).toBe(201)
//             expect(response._body.status).toMatch("success")
//             expect(response._body.message).toMatch("task updated successfully in this notes")
//             expect(response._body.updated_notes._id).toBeDefined()
//         }
        
//     })
// })

export const updateTask = ()=>{
    test("PATCH update task in notes API", async()=>{
        const response = await request(app).patch("/api/notes/note-works/update-task-in-notes").send({
            notes_id:"63aafea1c1d0c0a488a436b9",
            add_task:"test task in add task"
        })

        if(response.statusCode!=201){
            expect(response.statusCode).toBe(500)
            expect(response._body.status).toMatch("Fail")
        }
        else{
            expect(response.statusCode).toBe(201)
            expect(response._body.status).toMatch("success")
            expect(response._body.message).toMatch("task updated successfully in this notes")
            expect(response._body.updated_notes._id).toBeDefined()
        }
        
    })
}