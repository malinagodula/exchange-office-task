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

messagesRouter.get(
  "/protected-message",
  protect,

  (req, res) => {
    const { name, email } = User.findById(req.user._id);
    res.status(200).send({
      hello: name,
      "your email is": email,
    });
  }
);

module.exports = messagesRouter;
