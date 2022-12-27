import Label from "../model/labelModel"

export const createLabel = async (req, res)=>{
    try {
        const label = await Label.create(req.body)
        res.status(201).json({
            status:"Success",
            message:"Label created",
            label:label
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message:error.message
        })
    }
}

export const showLabels = async (req, res)=>{
    try {
        const labels = await Label.find()
        if(labels<1){
            return res.status(200).json({
                message:"labels not found"
            })
        }
        res.status(200).json({
            status:"Success",
            label_counts:labels.length,
            labels:labels
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const editLabels = async(req, res)=>{
    try {
        const label = await Label.findByIdAndUpdate(req.params.id, req.body, {new:true})
        // console.log(label);
        if(label){
            res.status(201).json({
                status:"Success",
                message:"Successfully updated",
                updated_data:label
            })
        }
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}

export const deleteLabel = async(req, res)=>{
    try {
        await Label.deleteOne({label_name:req.params.label_name})
        res.status(204).json({
            message:"label deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:error.message
        })
    }
}