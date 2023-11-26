const express = require("express");
const router = express.Router();

const aadharDataControllers = require("../controllers/aadharData");

router.post("/createAadhar", aadharDataControllers.createAadharData);
router.get("/getAadhar", aadharDataControllers.getAadharData);
router.patch("/updateAadhar", aadharDataControllers.updateAadharData);
router.delete("/deleteAadhar/:id", aadharDataControllers.deleteAadharData);

module.exports = router;
