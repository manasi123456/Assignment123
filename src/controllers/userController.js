const UserModel = require("../models/userModel");
const BookModel = require("../models/bookModel");
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await UserModel.create(data);
  res.send({ msg: savedData });
};

const getUsersData = async function (req, res) {
    let data1 = req.body;
    let allUsers = await UserModel.findOne(data1);
    let authr = allUsers.author_id;
    let allAuthor = await BookModel.findOne({ author_id: authr });
    res.send({ msg: allAuthor });
  };

//     let data1 = req.body;
//     let allUsers = await BookModel.findOneAndUpdate( { name: "Two states" }, { $set: data1 },{ new: true, upsert: true }
//     );
//     let authr = allUsers.author_id;
//     let allAuthor = await UserModel.findOne({ author_id: authr });
//     res.send({ msg: allAuthor.author_name });
//   };

//   let allUsers = await BookModel.find({ price: { $gte: 50, $lte: 100 } });
//   let aut = allUsers.map((x) => x.author_id);
//   let arr = [];
//   for (let i = 0; i < aut.length; i++) {
//     arr.push(
//       await UserModel.find({ author_id: aut[i] }).select({
//         author_name: 1,
//         _id: 0,
//       })
//     );
//   }
//   res.send({ msg: arr });
// };

module.exports.createUser = createUser;
module.exports.getUsersData = getUsersData;
