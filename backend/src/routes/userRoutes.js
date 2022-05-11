const express = require("express");
const userRouter = express.Router();
const { getLoggedUser, getUsers } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

userRouter.get("/logged", protect, getLoggedUser);

userRouter.get("/all", getUsers);

module.exports = userRouter;
