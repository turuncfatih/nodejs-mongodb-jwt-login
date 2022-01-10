const errors = require('../status/error');
const jwt = require("jsonwebtoken")
const dotenv=require('dotenv')
const cryptojs = require('crypto-js')
dotenv.config();


module.exports = async (req, res, next) =>
{
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
    {
        idToken = req.headers.authorization.split("Bearer ")[1];
    }
    else
    {
        return res.status(403).json(errors.TOKEN_NOT_FOUND);
    }


    let verifyToken
    try{
        let bytes = cryptojs.AES.decrypt(idToken, process.env.Secret_Mongo)
        const decodedD = bytes.toString(cryptojs.enc.Utf8)
        verifyToken = JSON.parse(decodedD)

        jwt.verify(verifyToken, process.env.Secret_Mongo, (err, decoded) => {
            if (err) {
                return res.status(401).send(errors.Unauthorized_NOT_FOUND);
            }
            if(decoded.role!=='Admin'){
                return res.status(401).send(errors.AUTHORIZATION_REQUIRED);
            }
        })
        return next();

    }catch (e) {
        return res.status(403).json(errors.UNIDENTIFIED_TOKEN);
    }

};
