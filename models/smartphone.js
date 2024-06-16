const mongoose = require('mongoose')

const CameraSchema = require('./camera')
const BiometricFeaturesSchema = require('./biometrics')
const ConnectivitySchema = require('./connectivity')
const DimensionsSchema = require('./dimensions')
const SpecialFeatureSchema = require('./specialFeatures')

const smartphoneSchema = mongoose.Schema(
    {
      model: {
        type: String,
        required: [true, "Model is required"],
      },
  
      brand: {
        type: String,
        required: [true, "Brand is required"],
      },
  
      operatingSystem: {
        type: String,
        required: [true, "Operating system is required"],
      },
  
      displayType: {
        type: String,
        required: [true, "Display type is required"],
      },
  
      displaySize: {
        type: Number,
        required: [true, "Display size is required"],
      },
  
      resolution: {
        type: String,
        required: [true, "Resolution is required"],
      },
  
      processor: {
        type: String,
        required: [true, "Processor is required"],
      },
  
      ram: {
        type: Number,
        required: [true, "RAM is required"],
      },
  
      storage: {
        type: Number,
        required: [true, "Storage is required"],
      },
  
      camera: {
        type: [CameraSchema],
        required: [true, "Camera details are required"],
      },
  
      batteryCapacity: {
        type: Number,
        required: [true, "Battery capacity is required"],
      },
  
      connectivity: {
        type: ConnectivitySchema,
        required: [true, "Connectivity details are required"],
      },
  
      dimensions: {
        type: DimensionsSchema,
        required: [true, "Dimensions are required"],
      },
  
      colorOptions: {
        type: [String],
        required: [true, "Color options are required"],
      },
  
      weight: {
        type: Number,
        required: [true, "weight is required"],
      },
  
      simcardSlots: {
        type: Number,
        required: [true, "Simcard slots are required"],
      },
  
      biometricFeatures: {
        type: BiometricFeaturesSchema,
        required: [true, "Biometrics are required"],
      },
  
      specialFeatures: {
        type: SpecialFeatureSchema,
        required: [true, "Special features are required"],
      },
  
      imageUrls: {
        type: [String],
        required: [true, 'Images are required']
      },
  
      price: {
        type: Number,
        required: [true, "Price is required"],
      },
  
      availability: {
        type: String,
        enums: ["in stock", "low stock", "out of stock"],
      },
    },
    {
      timestamps: true,
      read: 'nearest',
      writeConcern: {
        w: 'majority',
        wtimeoutMS: 30000,
        j: true
      }
    }
  );
  
  const Product = mongoose.model("Product", smartphoneSchema);
  
  module.exports = Product;
  
