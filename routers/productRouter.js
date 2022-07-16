const router = require("express").Router()
const Product = require("../models/Product")
const verify = require("../middleware/verify")

//Get a Product
router.get("/products/:id", verify, Product.getProduct)

//Get All Products
router.get("/products", Product.getProducts)

//Add a Product
router.post("/addproduct", verify, Product.createProduct)

//Update Product
router.put("/updateproduct/:id", verify, Product.updateProduct)

//Delete Product
router.delete("/deleteproduct/:id", verify, Product.deleteProduct)

module.exports = router