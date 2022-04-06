const express = require('express');
const logger = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('calling function')
    logger.a()
    res.send('Hey its me')
});

module.exports = router;
// adding this comment for no reason