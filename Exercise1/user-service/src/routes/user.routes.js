const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.get("/users", userController.getUsers);

module.exports = router;