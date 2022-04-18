const developerModel= require("../models/developerModel")
const batchrModel= require("../models/batchModel")
const batchModel = require("../models/batchModel")


// 1.........................................
const createDeveloper = async function (req, res) {
    let developer = req.body
            let developerCreated = await developerModel.create(developer)
            res.send({ data: developerCreated })
        }
    


const getDeveloperData= async function (req, res) {
    let Developer = await developerModel.find({ gender: "female" , percentage: {$gte:70}})
    res.send({data: Developer})
}

// const getDeveloperWithBatchDetails = async function (req, res) {
//     let developersData = await bookModel.find().populate('Batch')
//     res.send({data:  developersData})

// }
const getDeveloperWithBatchDetails = async function (req, res) {
    let batch = req.query.program
    let batchCreated = await batchModel.findOne({ name: batch }).select({_id: 1})
    let devlop = req.query.percentage
    let developerData = await developerModel.find({ batch_id: batchCreated , percentage: { $gte: devlop } })
    res.send({ data: developerData })
}    

module.exports.getDeveloperData= getDeveloperData

module.exports.createDeveloper= createDeveloper
module.exports.getDeveloperWithBatchDetails = getDeveloperWithBatchDetails


