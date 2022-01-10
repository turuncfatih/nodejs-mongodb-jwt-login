const CryptoJS=require('crypto-js')
const bcrypt = require("bcrypt")
const dotenv=require('dotenv')
dotenv.config();


class CryptoService{
    constructor() {
    }

    async cryptojsDecoded(data) {
        let bytes = CryptoJS.AES.decrypt(data, process.env.Secret_Mongo)
        const decodedD = bytes.toString(CryptoJS.enc.Utf8);
        const reqData = JSON.parse(decodedD)
        return reqData
    }

    async cryptojs(data) {
        try{
            console.log(process.env.Secret_Mongo)
            const cryptoData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.Secret_Mongo).toString();
            return cryptoData
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = CryptoService