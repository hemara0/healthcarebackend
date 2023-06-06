const express = require('express')
const router = express.Router()
const User = require('../models/user')
const user = require('../models/user')
const addedDate = Date.now();
// get all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// get one
router.get('/:id',getUser, (req, res) => {
    res.json(res.user)
})
// create one
router.post('/',async (req, res) => {
    const user = User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_dob: req.body.user_dob,
        user_mobile: req.body.user_mobile,
        user_lastlogin: addedDate,
        user_hospitals: req.body.user_hospitals,
        user_govtids: req.body.user_govtids,
        user_registereddate: addedDate,
        user_bloodgroup: req.body.user_bloodgroup,
        user_address_street:req.body.user_address_street,
        user_pincode: req.body.user_pincode,
        user_state : req.body.user_state,
        user_city: req.body.user_city,
        user_country: req.body.user_country,
        user_orders: req.body.user_orders

    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch {
        res.status(400).json(err.message)

    }
})
// update one
router.patch('/:id',getUser, async (req, res) => {
    if (req.body.user_mobile != null&& req.body.user_mobile != '') {
        res.user.user_mobile = req.body.user_mobile
    }
    if (req.body.user_email != null && req.body.user_email != '') {
        res.user.user_email = req.body.user_email
    }
    if (req.body.user_dob != null&& req.body.user_dob != '') {
        res.user.user_dob = req.body.user_dob
    }
    if (req.body.user_name != null&& req.body.user_name != '') {
        res.user.user_name = req.body.user_name
    }
    if (req.body.user_bloodgroup != null&& req.body.user_bloodgroup != '') {
        res.user.user_bloodgroup = req.body.user_bloodgroup
    }
    if (req.body.user_address_street != null&& req.body.user_address_street != '') {
        res.user.user_address_street = req.body.user_address_street
    }
    if (req.body.user_pincode != null&& req.body.user_pincode != '') {
        res.user.user_pincode = req.body.user_pincode
    }
    if (req.body.user_city != null && req.body.user_city != '') {
        res.user.user_city = req.body.user_city
    }
    if (req.body.user_state != null&& req.body.user_state != '') {
        res.user.user_state = req.body.user_state
    }
    if (req.body.user_country != null&& req.body.user_country != '') {
        res.user.user_country = req.body.user_country
    }
    if (req.body.user_hospitals != null) {
        res.user.user_hospitals = req.body.user_hospitals
    }
    if (req.body.user_govtids != null) {
        res.user.user_govtids = req.body.user_govtids
    }
    if (req.body.user_orders != null) {
        res.user.user_orders = req.body.user_orders
    }
    res.user.user_lastlogin = addedDate
    try {
        const updateUser = await res.user.save()
        res.json(updateUser)
    } catch (err){
        res.status(400).json({message: err.message})

    }
    
})
// delete one
router.delete('/:id', getUser, async (req, res) => {
    try{
    await User.findByIdAndDelete(req.params.id)
    res.json({message: "removed user"})
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next){
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({ message: 'Cannot find user'})
        }
    }catch (err) {
        return res.status(500).json({message : err.message})
    }

    res.user = user
    next()
}

module.exports = router