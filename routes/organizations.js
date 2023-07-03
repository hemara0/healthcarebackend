const express = require('express')
const router = express.Router()
const Organization = require('../models/organization')
const organization = require('../models/organization')
const addedDate = Date.now();
// get all
router.get('/', async (req, res) => {
    try {
        const organizations = await Organization.find()
        res.json(organizations)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// get one
router.get('/:id',getOrganization, (req, res) => {
    res.json(res.organization)
})
// create one
router.post('/',async (req, res) => {
    const organization = Organization({
        organization_name: req.body.organization_name,
        organization_practitioners: req.body.organization_practitioners,
        organization_contact: req.body.organization_contact,
        organization_registered_date: addedDate,
        organization_address_street: req.body.organization_address_street,
        organization_lastlogin: addedDate,
        organization_pincode:req.body.organization_pincode,
        organization_state: req.body.organization_state,
        organization_city : req.body.organization_city,
        organization_country: req.body.organization_country,
        organization_payment: req.body.organization_payment
    })
    try {
        const newOrganization = await organization.save()
        res.status(201).json(newOrganization)
    } catch {
        res.status(400).json(err.message)

    }
})
// update one
router.patch('/:id',getOrganization, async (req, res) => {
    if (req.body.organization_name != null&& req.body.organization_name != '') {
        res.organization.organization_name = req.body.organization_name
    }
    if (req.body.organization_practitioners != null && req.body.organization_practitioners != '') {
        res.organization.organization_practitioners = req.body.organization_practitioners
    }
    if (req.body.organization_contact != null&& req.body.organization_contact != '') {
        res.organization.organization_contact = req.body.organization_contact
    }
    if (req.body.organization_payment != null&& req.body.organization_payment != '') {
        res.organization.organization_payment = req.body.organization_payment
    }
    if (req.body.organization_address_street != null&& req.body.organization_address_street != '') {
        res.organization.organization_address_street = req.body.organization_address_street
    }
    if (req.body.organization_pincode != null&& req.body.organization_pincode != '') {
        res.organization.organization_pincode = req.body.organization_pincode
    }
    if (req.body.organization_state != null&& req.body.organization_state != '') {
        res.organization.organization_state = req.body.organization_state
    }
    if (req.body.organization_city != null && req.body.organization_city != '') {
        res.organization.organization_city = req.body.organization_city
    }
    if (req.body.organization_country != null&& req.body.organization_country != '') {
        res.organization.organization_country = req.body.organization_country
    }
    
    res.organization.organization_lastlogin = addedDate
    try {
        const updateOrganization = await res.organization.save()
        res.json(updateOrganization)
    } catch (err){
        res.status(400).json({message: err.message})

    }
    
})
// delete one
router.delete('/:id', getOrganization, async (req, res) => {
    try{
    await Organization.findByIdAndDelete(req.params.id)
    res.json({message: "removed Organization"})
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getOrganization(req, res, next){
    let organization
    try {
        organization = await Organization.findById(req.params.id)
        if (organization == null){
            return res.status(404).json({ message: 'Cannot find Organization'})
        }
    }catch (err) {
        return res.status(500).json({message : err.message})
    }

    res.organization = organization
    next()
}

module.exports = router