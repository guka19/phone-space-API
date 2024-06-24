const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  streetAddress: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      type: addressSchema,
    },

    role: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
    writeConcern: {
      w: "majority",
      j: true,
      wtimeoutMS: 30000,
    },
    read: "nearest",
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
