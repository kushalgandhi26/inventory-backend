const router = require("express").Router()
const swaggerUI = require("swagger-ui-express");
const swaggerdocument = require("../swagger.json")

router.use("/docs",swaggerUI.serve)
router.get("/docs",swaggerUI.setup(swaggerdocument))

module.exports = router