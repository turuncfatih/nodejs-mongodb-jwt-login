const mongoose = require("mongoose")
const dotenv=require('dotenv')
dotenv.config();


///////////// Mongodb Connect \\\\\\\\\\\\\\\
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) {
            return console.log('Could not connect to DB: ', err);
        }
        console.log('Successfully connected to database...');
    });

module.exports = {mongoose}