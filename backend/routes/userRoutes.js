const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user/index");

router.get("/getAllUsers", userControllers.getUser);
router.post("/createUser", userControllers.createUser);
router.patch("/updateUser/:id", userControllers.updateUser);
router.delete("/deleteUser/:id", userControllers.deleteUser);

module.exports = router;
