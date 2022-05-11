const mongoose = require("mongoose");

const dealSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Deal", dealSchema);
