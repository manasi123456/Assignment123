const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
      }
    


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
