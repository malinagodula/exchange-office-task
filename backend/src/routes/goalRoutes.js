const express = require("express");
const goalRouter = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

goalRouter.route("/").get(protect, getGoals).post(protect, setGoal);

goalRouter.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = goalRouter;
