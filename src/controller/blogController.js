const BlogModel = require("../Models/BlogModel")
const getBlogs= (req,res)=>{
   try{
     let data = BlogModel.find()
    console.log(data.data)
    if(!data.data){
        res.status(401).send({err: "data not found"})
    }
    res.status(200).send({msg:data.data})
}catch(err){
    console.log(err)
    res.status(500).send({err: "server not found"})
}
}





module.exports.getBlogs= getBlogs;