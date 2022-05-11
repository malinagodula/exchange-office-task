const express = require("express");
const dealRouter = express.Router();

const {
  getDeals,
  setDeal,
  updateDeal,
  deleteDeal,
} = require("../controllers/dealController");
const { protect } = require("../middleware/authMiddleware");

dealRouter.route("/").get(protect, getDeals).post(protect, setDeal);

dealRouter.route("/:id").put(protect, updateDeal).delete(protect, deleteDeal);

module.exports = dealRouter;
