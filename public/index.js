const http = require('http');
const app = require('./src/app')
const dotenv=require('dotenv')
dotenv.config();

http.createServer(app).listen(process.env.LISTEN_PORT);
