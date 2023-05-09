const express = require('express')
const router = express.Router()
const User = require('../models/user')
const user = require('../models/user')
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
        name: req.body.name,
        email: req.body.email
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
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
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