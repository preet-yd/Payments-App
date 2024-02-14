const jwt = require("jsonwebtoken-promisified"); // Use the alternative library
const { JWT_SECRET } = require("./config")

function authMiddleware (req,res,next) {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({message:"auth is not present or the authorization doesn't start with Bearer"})
    }

    const arr = authHeader.split(" ")
    const token = arr[1]

    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        req.userId = decoded.userId
        next();
    }
    catch(err) {
        console.error(err)
        return res.status(403).json({message : "some error orccured you are not verifed from the middleware"})
    }

}

module.exports = {
    authMiddleware
}