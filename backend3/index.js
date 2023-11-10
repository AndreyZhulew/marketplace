const express = require("express")
const cors = require('cors');

const userRouter = require("./routes/UserRoutes.js")
const productRouter = require("./routes/products.routes")
const categoryRouter = require("./routes/category.routes")
const subcategoryRouter = require("./routes/subcategory.routes")
const productTypeRouter = require("./routes/productType.routes")

const app = express()

app.use(cors());
app.options('*', cors());

app.use(express.json())

app.use("/api/", express.static('uploads'))
app.use("/api/user/", userRouter)
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/subcategory", subcategoryRouter)
app.use("/api/producttype", productTypeRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))