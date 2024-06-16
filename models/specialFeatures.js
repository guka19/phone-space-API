const mongoose = require('mongoose');

const SpecialFeatureSchema = mongoose.Schema({
    waterResistance: {
      type: Boolean,
    },
  
    fastCharging: {
      type: Boolean,
    },
  
    wirelessCharging: {
      type: Boolean,
    },
  
    dustResistance: {
      type: Boolean,
    },
  });


module.exports = SpecialFeatureSchema;