const user = require('../models/user')
const bcrypt = require("bcrypt")
const CryptoService = require('./crypto-service')
const cryptoService = new CryptoService()
const errors = require('../status/error')
const success = require('../status/success')

class UserService {
    constructor() {
    }
    async createUsers(data) {
        if (!data.email) {
            return {error: "missing information"}
        }

        const userCreateData = {
            email: data.email,
            password: bcrypt.hashSync(data.password, 8),
            role: data.role,
            username: data.username
        }
        const create = user(userCreateData)

        const findUser = await user.findOne({email: userCreateData.email})
        if (findUser) {
            return errors.USE_ALREADY_EXIST
        }

        let usersMail;
        const userD = await create.save().then(e => {
            usersMail = e;
        }).catch(err => {
            return {error: "Error"}
        })
        return {status:success.USER_REGISTERED}
    }

    async getUsers() {
        const data = []
        const userList = await user.find({});
        console.log(userList)
        data.push(userList)
        return data
    }

    async getSingleUser(data) {
        const getSingle = await user.findOne({_id: data.uid})
        return getSingle
    }
    //
    async updateUsers(data) {
        if (data) {
            if (data.id) {
                const userUpdate = await user.findOneAndUpdate({_id: data.id}, data).catch(error => {
                    console.log(error)
                })
                return userUpdate
            } else {
                return errors.USER_NOT_FOUND
            }
        } else {
            return errors.EMPTY_DATA
        }
        return errors.UNDEFINED_ERROR
    }

}

module.exports = UserService