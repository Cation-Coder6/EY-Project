const express = require("express");
const router = express.Router();

const creditFetch = require("../controllers/apiCalls/creditFetch");
const loanAmount = require("../controllers/apiCalls/loanAmount");
router.get("/creditFetch", creditFetch);
router.get("/loanAmount", loanAmount);

module.exports = router;
