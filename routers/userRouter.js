const router = require("express").Router()
const User = require("../models/User")

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - username
 *         - phonenumber
 *       properties:
 *         username:
 *           type: text
 *           description: The name of user
 *         phonenumber:
 *           type: text
 *           description: The phonenumber of user
 *       example:
 *         username: Kushal
 *         phonenumber: 9999999999
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The APIs for managing users
  */


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was logged in successfully and user registered if not exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */
//Login User
router.post("/login",User.loginUser)

//Get Users
router.get("/getUsers",User.getUsers)

module.exports = router