const router = require("express").Router()
const Product = require("../models/Product")
const verify = require("../middleware/verify")

/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: bigint
 *           description: The auto-generated id of the product
 *         title:
 *           type: text
 *           description: The product title
 *         image:
 *           type: text
 *           description: The image of product
 *         createduser:
 *           type: text   
 *           description: The user's name who created product   
 *       example:
 *         id: 16
 *         title: Product15
 *         image: http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg
 *         createduser: Kushal
 */

 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: The APIs for managing products
  */


/**
 * @swagger
 * /product/products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product information by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: The product was not found
 */
//Get a Product
router.get("/products/:id", verify, Product.getProduct)


/**
 * @swagger
 * /product/products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 */
//Get All Products
router.get("/products", Product.getProducts)


/**
 * @swagger
 * /product/addproduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       500:
 *         description: Some server error
 */
//Add a Product
router.post("/addproduct", verify, Product.createProduct)


/**
 * @swagger
 * /product/updateproduct/{id}:
 *  put:
 *    summary: Update the product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Products'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 */
//Update Product
router.put("/updateproduct/:id", verify, Product.updateProduct)


/**
 * @swagger
 * /product/deleteproduct/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 * 
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: The product was not found
 */
//Delete Product
router.delete("/deleteproduct/:id", verify, Product.deleteProduct)

module.exports = router