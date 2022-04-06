const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const validator = require('../validator/formatter')
const array = require('../array/arr')
const router = express.Router();

router.get('/test-me', function (req, res) {
   console.log('calling function')
   logger.log
   util.printDate()
   util.printMonth()
   util.a()
    res.send('Hey its me')
   validator.trim
    validator.lowercase
   validator.uppercase
    array.result
    array.result1
});

module.exports = router;
// adding this comment for no reason