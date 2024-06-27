const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request, check your request body
 */

router.post("/register", userService.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserLoginResponse'
 *       400:
 *         description: Bad request, check your request body
 *       401:
 *         description: Unauthorized, invalid credentials
 */

router.post("/login", userService.login);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         country:
 *           type: string
 *           description: Country of the address
 *         city:
 *           type: string
 *           description: City of the address
 *         streetAddress:
 *           type: string
 *           description: Street address
 *       required:
 *         - country
 *         - city
 *         - streetAddress
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         userName:
 *           type: string
 *           description: Unique username of the user
 *         email:
 *           type: string
 *           description: Unique email address of the user
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         role:
 *           type: string
 *           description: Role of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - firstName
 *         - lastName
 *         - userName
 *         - email
 *         - password
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email address of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - email
 *         - password
 *     UserLoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT token for authenticated requests
 *         user:
 *           $ref: '#/components/schemas/User'
 */
