const mongoose = require("mongoose");

const LensSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Lens type is required"],
  },
  megapixels: {
    type: Number,
    required: [true, "Megapixels are required"],
  },
  features: {
    type: String,
    required: [false],
  },
});

const CameraSchema = mongoose.Schema({
  position: {
    type: String,
    enum: ["back", "front"],
    required: [true, "Camera Position is required"],
  },

  lenses: {
    type: [LensSchema],
    required: [true, "Lenses details are requried"],
  },
});

module.exports = CameraSchema;