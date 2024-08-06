const {User} = require("../db/user")
const jwt = require("jsonwebtoken");
const secret = "Digvijay";
async function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedToken = jwt.verify(jwtToken, secret);
    if (decodedToken.username){
        req.username = decodedToken.username;
        next();
    }else{
        res.status(403).json({
            msg: "You are not authenticated"
        });
    }
};

module.exports = userMiddleware;