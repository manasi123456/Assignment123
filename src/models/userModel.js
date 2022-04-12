const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: String,
    category: String,
    year: Number,
    mobile: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "LGBTQ"], //"falana" will give an error
    },
    isIndian: Boolean,
    parentsInfo: {
      motherName: String,
      fatherName: String,
      siblingName: String,
    },
    BookPrice: IndianRupee,
    cars: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); //users

// String, Number
// Boolean, Object/json, array
