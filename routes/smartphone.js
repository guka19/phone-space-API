const express = require("express");
const router = express.Router();

const studentService = require("../services/smartphoneService");
const smartphoneService = require("../services/smartphoneService");


/**
 * @swagger
 * /smartphones/all:
 *  get:
 *      summary: Returns the list of all the smartphones
 *      tags: [Smartphones]
 *      responses:
 *          200:
 *              description: the list of the smartphones
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/Smartphone'
 */
router.get("/all", studentService.getAll);

/**
 * @swagger
 * /smartphones/{id}:
 *   get:
 *     summary: Get a smartphone by ID
 *     tags: [Smartphones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the smartphone to get
 *     responses:
 *       200:
 *         description: The smartphone details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Smartphone'
 *       404:
 *         description: Smartphone not found
 */
router.get("/:id", studentService.getById);

/**
 * @swagger
 * /smartphones/add:
 *   post:
 *     summary: Add a new smartphone
 *     tags: [Smartphones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Smartphone'
 *     responses:
 *       200:
 *         description: Smartphone successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Smartphone'
 *       400:
 *         description: Bad request, check your request body
 */
router.post("/add", studentService.add);

/**
 * @swagger
 * /smartphones/{id}:
 *   delete:
 *     summary: Delete a smartphone by ID
 *     tags: [Smartphones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the smartphone to delete
 *     responses:
 *       200:
 *         description: Smartphone successfully deleted
 *       404:
 *         description: Smartphone not found
 */
router.delete("/:id", studentService.delete);

/**
 * @swagger
 * /smartphones/{id}:
 *   patch:
 *     summary: Update a smartphone by ID
 *     tags: [Smartphones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the smartphone to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Smartphone'
 *     responses:
 *       200:
 *         description: Smartphone successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Smartphone'
 *       400:
 *         description: Bad request, check your request body
 */
router.patch("/:id", studentService.update);

router.post("/cart/add", smartphoneService.addToCart);
router.get("/cart/:id", smartphoneService.getCartByUserId);

module.exports = router;



/**
 * @swagger
 * components:
 *   schemas:
 *     Smartphone:
 *       type: object
 *       required:
 *         - model
 *         - brand
 *         - operatingSystem
 *         - displayType
 *         - displaySize
 *         - resolution
 *         - processor
 *         - ram
 *         - storage
 *         - camera
 *         - batteryCapacity
 *         - connectivity
 *         - dimensions
 *         - colorOptions
 *         - weight
 *         - simcardSlots
 *         - biometricFeatures
 *         - specialFeatures
 *         - imageUrls
 *         - price
 *         - availability
 *       properties:
 *         model:
 *           type: string
 *           description: Model of the smartphone
 *         brand:
 *           type: string
 *           description: Brand of the smartphone
 *         operatingSystem:
 *           type: string
 *           description: Operating system of the smartphone
 *         displayType:
 *           type: string
 *           description: Type of display (e.g., LCD, OLED)
 *         displaySize:
 *           type: number
 *           description: Size of the display in inches
 *         resolution:
 *           type: string
 *           description: Display resolution (e.g., 1920x1080)
 *         processor:
 *           type: string
 *           description: Processor model or type
 *         ram:
 *           type: number
 *           description: Amount of RAM in gigabytes
 *         storage:
 *           type: number
 *           description: Storage capacity in gigabytes
 *         camera:
 *           type: object
 *           properties:
 *             position:
 *               type: string
 *               enum:
 *                 - back
 *                 - front
 *               description: Position of the camera (front or back)
 *             lenses:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     description: Type of lens
 *                   megapixels:
 *                     type: number
 *                     description: Megapixels of the lens
 *                   features:
 *                     type: string
 *                     description: Additional features of the lens (optional)
 *               description: Array of camera lenses details
 *           description: Camera details of the smartphone
 *         batteryCapacity:
 *           type: number
 *           description: Battery capacity in milliampere-hours (mAh)
 *         connectivity:
 *           type: object
 *           properties:
 *             wifi:
 *               type: boolean
 *               description: Wi-Fi capability
 *             bluetooth:
 *               type: boolean
 *               description: Bluetooth capability
 *             nfc:
 *               type: boolean
 *               description: NFC capability
 *             g3:
 *               type: boolean
 *               description: 3G capability
 *             g4:
 *               type: boolean
 *               description: 4G capability
 *             g5:
 *               type: boolean
 *               description: 5G capability
 *           description: Connectivity details of the smartphone
 *         dimensions:
 *           type: object
 *           properties:
 *             length:
 *               type: number
 *               description: Length of the smartphone in millimeters
 *             width:
 *               type: number
 *               description: Width of the smartphone in millimeters
 *             thickness:
 *               type: number
 *               description: Thickness of the smartphone in millimeters
 *           description: Dimensions (length, width, thickness) of the smartphone
 *         colorOptions:
 *           type: array
 *           items:
 *             type: string
 *           description: Available color options of the smartphone
 *         weight:
 *           type: number
 *           description: Weight of the smartphone in grams
 *         simcardSlots:
 *           type: number
 *           description: Number of SIM card slots in the smartphone
 *         biometricFeatures:
 *           type: object
 *           properties:
 *             fingerPrint:
 *               type: boolean
 *               description: Presence of fingerprint sensor
 *             faceRecognition:
 *               type: boolean
 *               description: Presence of face recognition feature
 *             iriScanning:
 *               type: boolean
 *               description: Presence of iris scanning feature
 *           description: Biometric features of the smartphone
 *         specialFeatures:
 *           type: object
 *           properties:
 *             waterResistance:
 *               type: boolean
 *               description: Water resistance capability
 *             fastCharging:
 *               type: boolean
 *               description: Fast charging capability
 *             wirelessCharging:
 *               type: boolean
 *               description: Wireless charging capability
 *             dustResistance:
 *               type: boolean
 *               description: Dust resistance capability
 *           description: Special features of the smartphone
 *         imageUrls:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs of images for the smartphone
 *         price:
 *           type: number
 *           description: Price of the smartphone in specified currency
 *         availability:
 *           type: string
 *           enum:
 *             - in stock
 *             - low stock
 *             - out of stock
 *           description: Availability status of the smartphone
 */

/**
 * @swagger
 * tags:
 *  name: Smartphones
 *  description: The smartphones managing API
 */