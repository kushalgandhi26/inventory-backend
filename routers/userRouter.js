const router = require("express").Router()
const User = require("../models/User")

//Login User
router.post("/login",User.loginUser)

module.exports = router