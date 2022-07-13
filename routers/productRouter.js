const router = require("express").Router()
const Product = require("../models/Product")

//Get a Product
router.get("/products/:id", Product.getProduct)

//Add a Product
router.post("/addproduct", Product.createProduct)

//Get All Products
router.get("/products", Product.getProducts)

//Update Product
router.put("/updateproduct/:id",Product.updateProduct)

//Delete Product
router.delete("/deleteproduct/:id",Product.deleteProduct)

module.exports = router