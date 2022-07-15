const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Inventory-app API",
			version: "1.0.0",
			description: "An Inventory management website which provides basic CRUD operations.",
		},
		servers: [
			{
				url: process.env.BACKEND_URL,
			},
		],
	},
	apis: ["./routers/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express()
dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8000)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/product", require("./routers/productRouter"))
app.use("/user", require("./routers/userRouter"))