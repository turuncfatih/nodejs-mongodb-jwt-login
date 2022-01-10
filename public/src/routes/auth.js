const router = require("express").Router();
const AuthService = require('../services/auth-service')
const authService = new AuthService()



router.post('/',async function (req,res){
    try{
        const data = req.body
        const loginService = await authService.login(data)
        res.status(200).json(loginService)
    }
    catch (e) {
        res.status(401).json(e)
    }
})

router.get('/verifyToken', async function (req, res) {
    console.log("sda")
    const data = req.query.token
    const token = req.query;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }
    try {
        const user = await authService.verifyToken(data)
        console.log(user)
        res.status(200).json(user)
    } catch (e) {
        res.status(400).json({message: "Token Undefined"})
        console.log(e)
    }
})


module.exports=router