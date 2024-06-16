const mongoose = require("mongoose");

const ConnectivitySchema = mongoose.Schema({
  wifi: {
    type: Boolean,
  },

  bluetooth: {
    type: Boolean,
  },

  nfc: {
    type: Boolean,
  },

  g3: {
    type: Boolean,
  },

  g4: {
    type: Boolean,
  },

  g5: {
    type: Boolean,
  },
});

module.exports = ConnectivitySchema;
