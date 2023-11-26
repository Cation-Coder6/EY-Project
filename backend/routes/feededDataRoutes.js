const express = require("express");
const router = express.Router();

const feededDataControllers = require("../controllers/feededData/index");

router.post("/create", feededDataControllers.createFeededData);
router.get("/get", feededDataControllers.getFeededDataByCropCode);
router.patch("/update", feededDataControllers.updateFeededDataByCropCode);
router.delete("/delete", feededDataControllers.deleteFeededDataByCropCode);

module.exports = router;
