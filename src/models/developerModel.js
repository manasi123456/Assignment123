const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    name: String,
    batch_id: {
        type: ObjectId,
        ref: "Batch"
    },
    percentage: Number,
    gender : {
        type: String,
        enum: ['male','female','other']
    },
    batch_id: {
        type: ObjectId,
        ref: "Batch"
    }


}, { timestamps: true });


module.exports = mongoose.model('Developer', developerSchema)
