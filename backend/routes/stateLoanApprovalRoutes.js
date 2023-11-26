const express = require("express");
const router = express.Router();

const stateDataControllers = require("../controllers/stateLoanApproval");

router.post("/addStateRecord", stateDataControllers.createStateData);
router.get("/getStateList", stateDataControllers.getStateData);
router.patch("/updateStateRecord/:id", stateDataControllers.updateStateData);
router.delete("/deleteStateRecord/:id", stateDataControllers.deleteStateData);

module.exports = router;
