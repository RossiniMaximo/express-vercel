const express = require("express");

const product = require("./product");

const app = express();

const PORT = process.env.port || "3001";

app.use("/api/product", product);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
