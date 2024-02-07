const express = require("express")
const z = require("zod")
const { User } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware")
const router = express.Router();

const UserSignUpSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string(),
})

router.post('/signup', async (req, res) => {
    const body = req.body
    const parsedBody = UserSignUpSchema.safeParse(body)
    if (!parsedBody.success) {
        return res.status(411).json({ message: "Incorrect inputs" })
    }
    const userExist = await User.findOne({ username: body.username })
    if (userExist) {
        return res.status(411).json({ message: "Email already taken" })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId = user._id
    const token = jwt.sign({ userId }, JWT_SECRET)
    res.status(200).json({
        message: "User Created Successfully",
        token: token
    })
})

const UserSignInSchem = z.object({
    username: z.string().email(),
    password: z.string(),
})

router.post("/signin", (req, res) => {
    const body = req.body
    const { success } = UserSignInSchem.safeParse(body)
    if (!{ success }) {
        res.status
    }
    const user = User.findOne({ username: body.username })
    if (user) {
        const userId = user._id
        const token = jwt.sign({ userId }, JWT_SECRET)
        res.status(200).json({ token: token })
    }
    res.status(411).json({ message: "Error while logging in" })

})

const updateBodySchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional()
})

router.put("/", authMiddleware ,async (req, res) => {
    const { success } = updateBodySchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        });
        return; // Make sure to return or use else to avoid executing the next block of code
    }

    try {
        // Assuming User is a mongoose model
        console.log({ body : req.body})
        
        await User.updateOne(req.body, {
            _id: req.userId
        })

        res.json({
            message: "Updated successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.get("/bulk",async(req,res)=>{
    const filter = req.query.filter || ""
    const users = await User.find({
        $or : [
            {firstName : {"$regex" : filter}},
            {lastName : {"$regex" : filter}},
        ]
    })

    res.json({
        users : users.map(user => ({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })


})


module.exports = router;
