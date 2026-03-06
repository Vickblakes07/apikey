const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/products");
const apiKeyMiddleware = require("./middleware/apiKey");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/products", apiKeyMiddleware, productsRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to E-commerce API (Structured Version)" });
});

module.exports = app;