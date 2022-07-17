const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const app = express()

dotenv.config();
app.use(cors());
app.use(express.json());

var port = process.env.PORT || 8000
app.listen(port)


// app.use("/api",require("./swaggerRoute/swagger"))
app.use("/product", require("./routers/productRouter"))
app.use("/user", require("./routers/userRouter"))