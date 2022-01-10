const user = require('../models/user')
const bcrypt = require("bcrypt")
const CryptoService = require('./crypto-service')
const cryptoService = new CryptoService()
const errors = require('../status/error')
const success = require('../status/success')
const jwt = require("jsonwebtoken")
const dotenv=require('dotenv')
dotenv.config();

class AuthService{

    constructor() {
    }


    async login(data) {
        const getSingle = await user.findOne({email: data.email})
        if (getSingle) {
            const passwordIsValid = bcrypt.compareSync(
                data.password,
                getSingle.password
            );
            if (!passwordIsValid) {
                return errors.INVALID_PASSWORD
            }

            if (!getSingle.token) {
                const token = jwt.sign({email: getSingle.email, role: getSingle.role}, process.env.Secret_Mongo, {
                    expiresIn: 43200//43200 //86400 // 24 hours
                })
                const tokenSave = {
                    token: token
                }
                user.findByIdAndUpdate({_id: getSingle._id}, tokenSave).catch(error => {
                    console.log(error)
                })
                const cryptoToken = await cryptoService.cryptojs(token)
                return {token: cryptoToken}
            }


            await jwt.verify(getSingle.token, process.env.Secret_Mongo, async (err, decoded) => {
                if (err) {
                    const token = jwt.sign({email: data.email, role: getSingle.role}, process.env.Secret_Mongo, {
                        expiresIn: 43200   //43200 //86400 // 24 hours
                    })
                    const tokenSave = {
                        token: token
                    }
                    user.findByIdAndUpdate({_id: getSingle._id}, tokenSave).catch(error => {
                        console.log(error)
                    })
                    const cryptoTokens = await cryptoService.cryptojs(tokenSave)
                    return {refresh_token: cryptoTokens}
                }

            })
            const cryptoTokens = await cryptoService.cryptojs(getSingle.token)
            return {token: cryptoTokens}
        } else {
            return errors.USER_NOT_FOUND
        }
    }


    async verifyToken(data){
        try{
            let response;
            await jwt.verify(data, process.env.Secret_Mongo, async (err, decoded) => {
                if (err) {
                    return {message : "Oturum Süresi Sonlanmıştır"}
                }
                else{
                    response = decoded
                }
            })
            if(response) { return response} else{ return {message: "error"}}

        }catch (e) {
            console.log(e)
            return {message : "Undefined Message"}
        }
    }
}

module.exports=AuthService