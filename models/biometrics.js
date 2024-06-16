const mongoose = require('mongoose')

const BiometricFeaturesSchema = mongoose.Schema({
    fingerPrint: { type: Boolean },
    faceRecongnition: { type: Boolean},
    iriScanning: { type: Boolean }
});

module.exports = BiometricFeaturesSchema