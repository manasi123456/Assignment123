const express = require('express')
const router = express.Router()
const blogController = require('../controller/blogController')

router.get('/test-me', function (req, res) {
  res.send('My first ever api!')
})
router.get('/getblogs',blogController.getBlogs)

module.exports = router
