const {mongoose} = require('../utils/admin')
const schema = new mongoose.Schema({
        username: {
            type:String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 500
        }
    });

module.exports = mongoose.model('users', schema );