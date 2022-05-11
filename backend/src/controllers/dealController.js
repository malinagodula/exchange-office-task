const asyncHandler = require("express-async-handler");
const Deal = require("../models/dealModel");

// @desc Get deals
// @route GET /api/deals
// @access Private
const getDeals = asyncHandler(async (req, res) => {
  const deals = await Deal.find({ user: req.user.sub });
  res.status(200).json(deals);
});

// @desc Set deal
// @route POST /api/deals
// @access Private
const setDeal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json(req.body);
    throw new Error("Please add text field");
  }

  const deal = await Deal.create({
    text: req.body.text,
    user: req.user.sub,
  });
  res.status(200).json(deal);
});

// @desc Update deals
// @route PUT /api/deals/:id
// @access Private
const updateDeal = asyncHandler(async (req, res) => {
  const deal = await Deal.findById(req.params.id);

  if (!deal) {
    res.status(400);
    throw new Error("Deal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the deal user
  if (deal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedDeal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedDeal);
});

// @desc    Delete deal
// @route   DELETE /api/deals/:id
// @access  Private
const deleteDeal = asyncHandler(async (req, res) => {
  const deal = await Deal.findById(req.params.id);

  if (!deal) {
    res.status(400);
    throw new Error("Deal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the deal user
  if (deal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await deal.remove();

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
  getDeals,
  setDeal,
  updateDeal,
  deleteDeal,
};
