const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController= require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createBatch", batchController.createBatch  )

router.get("/getDeveloperData", developerController.getDeveloperData)

router.post("/createDeveloper", developerController.createDeveloper  )

router.get("/getbatchData", batchController.getbatchData)

 router.get("/getDeveloperWithBatchDetails", developerController.getDeveloperWithBatchDetails)

// router.post("/createPublisher", bookController.createPublisher  )

//  router.put("/updateBookPrice",bookController.updateBookPrice)

//  router.put("/updateBookData",bookController.updateBookData)

module.exports = router;