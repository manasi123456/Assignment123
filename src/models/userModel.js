// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,

const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    author_id: Number,
    author_name: {
      type: String,
      required: true,
    },
    age: Number,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", authorSchema);
// isIndian: Boolean,
// parentsInfo: {
//     motherName: String,
//     fatherName: String,
//     siblingName: String
// },
// cars: [ String  ]
//}, { timestamps: true });

//module.exports = mongoose.model('User', userSchema) //users

// String, Number
// Boolean, Object/json, array
