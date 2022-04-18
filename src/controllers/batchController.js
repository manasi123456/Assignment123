const batchModel= require("../models/batchModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}

const getbatchData= async function (req, res) {
    let Batch = await batchModel.find()
    res.send({data: Batch})
}

module.exports.createBatch= createBatch
module.exports.getbatchData=getbatchData