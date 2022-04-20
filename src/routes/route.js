const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMw = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





router.post("/createUser1",commonMw.mid1, userController.createUser1)
router.post('/createProduct', commonMw.mid1, ProductController.createProduct)
router.post("/createOrder", orderController.createOrder)






module.exports = router;