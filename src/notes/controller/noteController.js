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
        if(notes<1){
            return res.status(404).json({
                message:"notes not available"
            })
        }
        res.status(200).json({
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
        // console.log(notes);
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