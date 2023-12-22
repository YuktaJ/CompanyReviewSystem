let express = require('express');

let router = express.Router();
let companyController = require("../controller/Company");


router.post("/reviews", companyController.postReview);
router.get("/reviews", companyController.getReview);

module.exports = router;