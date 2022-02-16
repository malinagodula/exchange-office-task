/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { protect } = require("../middleware/authMiddleware");

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  res.status(200).send({
    message: "PUBLIC: The API doesn't require an access token.",
  });
});

messagesRouter.get("/protected-message", protect, (req, res) => {
  res.status(200).send({
    message: "PRIVATE: The API successfully validated your access token.",
  });
});

module.exports = messagesRouter;
