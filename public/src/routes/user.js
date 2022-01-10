const router = require("express").Router();
const UserService = require('../services/user-services')
const userService = new UserService()



router.get('/getall', async function (req, res) {
    try {
        const getProduct = await userService.getUsers();
        res.status(200).json(getProduct)
    } catch (e) {
        res.status(404)
    }
})

router.post('/get', async function (req, res) {
    try {
        const data = req.body
        const getProduct = await userService.getSingleUser(data);
        res.status(200).json(getProduct)
    } catch (e) {
        res.status(404)
    }
})

router.post('/create', async function (req, res) {
    try {
        const data = req.body
        const getUsers = await userService.createUsers(data);
        res.status(200).json(getUsers)
    } catch (e) {
        res.status(404)
    }
})

router.post('/update', async function (req, res) {
    const data = req.body
    try {
        const updateUser=await userService.updateUsers(data)
        res.status(200).json(updateUser)
    } catch (e) {
        res.status(400).json({code: 'ERROR'})
    }
})


module.exports = router