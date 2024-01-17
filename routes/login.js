const userLogin = require("../models/login")
const express = require('express')
const router = express.Router()
/*router.post('/',getUserLogin,async (req, res) => {
    const loginUser = UserLogin({
        username: req.body.username,
        password : req.body.password,
        patient_id : req.body.patient_id
    })
    if(req.body.username == res.body.username && req.body.password == res.body.password){
        const validate = true

    }
    res.json(res.userLogin)
})*/

router.get('/username=:username',getUserLogin, (req, res) => {
    // console.log(req)
    res.json(res.userLogin)
   // console.log(res.json(res.userLogin))
})

async function getUserLogin(req, res, next){
    let user
    try {
        const user_name = req.originalUrl.replace('/login/username=', '');
        console.log(user_name)
        user = await userLogin.find({"username": user_name})
        if (user == null || user.length==0){
            return res.status(404).json({ message: 'Cannot find user'})
        }
    }catch (err) {
        return res.status(500).json({message : err.message})
    }

    res.userLogin = user
    next()
}

module.exports = router