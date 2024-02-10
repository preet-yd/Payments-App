const express = require("express")
const router = express.Router();
const app = express()



const userRouter = require("./user")
const accountRouter = require("./account")
router.use("/user",userRouter)
router.use("/account",accountRouter)

module.exports = router;

