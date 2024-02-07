const express = require("express");
const app = express()
const rootRouter = require("./routes/index.js")

app.use(express.json());

app.use("/api/v1",rootRouter);

app.listen(3000)