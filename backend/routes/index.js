const express = require("express")
const router = express.Router();
const app = express()

const cors = require("cors");
app.use(cors());

const userRouter = require("./user")
router.use("/user",userRouter)

module.exports = router;

