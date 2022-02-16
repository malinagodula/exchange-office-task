const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals });
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });

  //   try {
  //     let post = await Post.findByIdAndRemove(req.params.postId);
  //     if (post) {
  //       res.status(200).json({
  //         status: 200,
  //         message: "Post deleted successfully",
  //       });
  //     } else {
  //       res.status(400).json({
  //         status: 400,
  //         message: "No post found",
  //       });
  //     }
  //   } catch (err) {
  //     res.status(400).json({
  //       status: 400,
  //       message: err.message,
  //     });
  //   }
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
