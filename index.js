const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const app = express()

dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,() => {
    console.log(`Server has started on ${process.env.PORT}`)
})

app.use(require("./routers/swagger"))
app.use("/product", require("./routers/productRouter"))
app.use("/user", require("./routers/userRouter"))