const router = require("express").Router()
const Product = require("../models/Product")
const verify = require("../middleware/verify")

//Get a Product
router.get("/products/:id", verify, Product.getProduct)

//Add a Product
router.post("/addproduct", verify, Product.createProduct)

//Get All Products
router.get("/products", Product.getProducts)

//Update Product
router.put("/updateproduct/:id", verify, Product.updateProduct)

//Delete Product
router.delete("/deleteproduct/:id",verify, Product.deleteProduct)

module.exports = router