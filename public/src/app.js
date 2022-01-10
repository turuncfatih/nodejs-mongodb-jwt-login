const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const user =require('./routes/user')
const auth =require('./routes/auth')


app.use(bodyParser.json());
app.use(cors({origin: true}));

app.use("/user", user)
app.use("/login", auth)


app.get('/', (req, res) => {
    res.send('WELCOME TO API!')
})

module.exports = app