const express = require("express");
const router = express.Router();

const pancardDataControllers = require("../controllers/panCard");

router.post("/addPancardRecord", pancardDataControllers.createPancardData);
router.get("/getPancardList", pancardDataControllers.getPancardData);
router.patch(
  "/updatePancardRecord/:id",
  pancardDataControllers.updatePancardData
);
router.delete(
  "/deletePancardRecord/:id",
  pancardDataControllers.deletePancardData
);

module.exports = router;
