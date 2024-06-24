const mongoose = require("mongoose");

const DimensionsSchema = mongoose.Schema({
  length: {
    type: Number,
    required: [true, "Length is required"],
  },

  width: {
    type: Number,
    required: [true, "Width is required"],
  },

  thickness: {
    type: Number,
    required: [true, "Thickness is required"],
  },
});

module.exports = DimensionsSchema;
