import Note from "../model/noteModel"

export const createNote = async(req, res)=>{
    try {
        const note = await Note.create(req.body)
        res.status(201).json({
            status:"Success",
            message:"notes created successfully",
            created_note:note
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const showNotes = async(req, res)=>{
    try {
        const notes = await Note.find()
        // console.log("Hiii");
        if(notes<1){
            return res.status(404).json({
                message:"notes not available"
            })
        }
        return res.status(200).json({
            status:"Success",
            note_counts:notes.length,
            notes:notes
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const updateLabel = async(req, res)=>{
    try {
        const note = await Note.findById(req.body.notesId)
        let emptyArr =  note.labelId
        let check = note.labelId.includes(req.body.labelId)
        if(!check){
            emptyArr.push(req.body.labelId)
            const updation = await Note.findByIdAndUpdate(req.body.notesId, {labelId:emptyArr}, {new:true})
            return res.status(201).json({
                status:"Success",
                message:`label added in your note(${note.Title}) successfully`
            })
        }
        else{
            res.status(400).json({
                message:"Sorry... lable already exists in your notes"
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"Failll",
            message:error.message
        })
    }
}

export const showNotesByLabel = async(req, res)=>{
    try {
        const notes = await Note.find({labelId:req.params.id})
        if(notes<1){
            return res.status(404).json({
                message:"no notes found in this label"
            })
        }
        res.status(200).json({
            status:"success",
            message:`notes for the labelId : ${req.params.id} are...`,
            note_counts:notes.length,
            notes:notes
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const editNotes = async(req, res)=>{
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json({
            status:"success",
            message:"notes updated successfully",
            updated_notes:note
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const updateTask = async(req, res)=>{
    try {
        const note = await Note.findById(req.body.notes_id)
        let taskArr = note.task
        taskArr.push(req.body.add_task)
        // console.log(taskArr);
        let updateTask = await Note.findByIdAndUpdate(req.body.notes_id, {task:taskArr}, {new:true})
        if(updateTask){
            res.status(201).json({
                status:"success",
                message:"task updated successfully in this notes",
                updated_notes:updateTask
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const deleteNotes = async(req, res)=>{
    try {
        await Note.deleteOne({_id:req.params.id})
        res.status(204).json({
            message:"deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}