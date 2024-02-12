const express = require("express")
const { authMiddleware } = require("../middleware")
const { Account } = require("../db")
const { default: mongoose } = require("mongoose")
const router = express.Router()

router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId
        const User = await Account.findOne({ userId })
        return res.status(200).json({ balance: User.balance })
    }
    catch (err) {
        return res.json({ message: `some error occured while fetching the balance ${err}` })
    }

})

router.post("/transfer", authMiddleware, async (req, res) => {
    // to start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { to, amount } = req.body
        const sender = await Account.findOne({ userId: req.userId }).session(session)
        if (!sender || sender.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient Balance" })

        }
        const receiver = await Account.findOne({ userId: to }).session(session)
        if (!receiver) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid Account" })
        }
        await Account.updateOne(
            { userId: req.userId },
            { $inc: { balance: -amount } }
        ).session(session)
        await Account.updateOne(
            { userId: to },
            { $inc: { balance: +amount } }
        ).session(session)

        await session.commitTransaction();
        return res.status(200).json({ message: "Transfer Successful" })
    }
    catch (err) {
        await session.abortTransaction();
        console.error(err);
        return res.status(500).json({ message: "Trasaction Didn't Complete" })
    }
    finally {
        session.endSession();
    }
})

module.exports = router

