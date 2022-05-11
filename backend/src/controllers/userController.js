const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Get user data
// @route   GET /api/users/logged
// @access  Private
const getLoggedUser = asyncHandler(async (req, res) => {
  const userAuth0Id = req.user.sub.substring(6);
  const user = await User.findById(userAuth0Id);
  // res.status(200).json(user);
  res.status(200).json({
    email: user.email,
    name: user.name,
    wallet: user.wallet,
  });
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});

module.exports = {
  getLoggedUser,
  getUsers,
};
