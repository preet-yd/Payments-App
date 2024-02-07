const jwt = require("jsonwebtoken")
const JwtKey = require("../../assignments/week-3/04-mongo-with-jwt-auth/JWT/jwt")

function authMiddleware (req,res,next) {
    const authHeader = req.headers.authorization
    // if(!authHeader || authHeader.startsWith("Bearer ")){
    //     return res.status(403).json({})
    // }

    const arr = authHeader.split(" ")
    const token = arr[1]

    try{
        const decoded = jwt.verify(token,JwtKey)
        req.userId = decoded.userId
        next();
    }
    catch(err) {
        return res.status(403).json({})
    }

}

module.exports = {
    authMiddleware
}