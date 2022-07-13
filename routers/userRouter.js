const router = require("express").Router()
const User = require("../models/User")

//Login User
router.post("/login",User.loginUser)

//Get Users
router.get("/getUsers",User.getUsers)

module.exports = router