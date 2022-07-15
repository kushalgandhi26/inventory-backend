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
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["./routers/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,() => {
    console.log(`Server has started on ${process.env.PORT}`)
})

app.use("/product", require("./routers/productRouter"))
app.use("/user", require("./routers/userRouter"))