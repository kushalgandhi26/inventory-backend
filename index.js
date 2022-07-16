const express = require("express")
const router = require("express").Router()
const cors = require("cors")
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const swaggerdocument = require("../swagger.json")

const app = express()
app.use("/api-docs",swaggerUI.serve)
router.get("/api-docs",swaggerUI.setup(swaggerdocument))

dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8000)

app.use("/product", require("./routers/productRouter"))
app.use("/user", require("./routers/userRouter"))