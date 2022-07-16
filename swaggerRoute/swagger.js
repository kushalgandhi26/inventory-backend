const router = require("express").Router()
const swaggerUI = require("swagger-ui-express");
const swaggerdocument = require("../swagger.json")

router.use("/api-docs",swaggerUI.serve)
router.get("/api-docs",swaggerUI.setup(swaggerdocument))

module.exports = router