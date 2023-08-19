const express = require('express')
const router = express.Router()
const Pharmacydrug = require('../models/pharmacydrug')
const addedDate = Date.now();
// get all
router.get('/', async (req, res) => {
    try {
        const pharmacydrugs = await Pharmacydrug.find()
        res.json(pharmacydrugs)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// get one
router.get('/:id',getPharmacydrug, (req, res) => {
    res.json(res.pharmacydrug)
})
// create one
router.post('/',async (req, res) => {
    const pharmacydrug = Pharmacydrug({
        drug_name: req.body.drug_name,
        drug_category: req.body.drug_category,
        drug_companies: req.body.drug_companies,
        drug_registered_date: addedDate,
        drug_store: req.body.drug_store,
        drug_updated_date: addedDate,
        drug_price: req.body.drug_price,
    })
    try {
        const newPharmacydrug = await pharmacydrug.save()
        res.status(201).json(newPharmacydrug)
    } catch {
        res.status(400).json(err.message)

    }
})
// update one
router.patch('/:id',getPharmacydrug, async (req, res) => {
    if (req.body.drug_name != null&& req.body.drug_name != '') {
        res.pharmacydrug.drug_name = req.body.drug_name
    }
    if (req.body.drug_category != null && req.body.drug_category != '') {
        res.pharmacydrug.drug_category = req.body.drug_category
    }
    if (req.body.drug_companies != null&& req.body.drug_companies != '') {
        res.pharmacydrug.drug_companies = req.body.drug_companies
    }
    if (req.body.drug_store != null&& req.body.drug_store != '') {
        res.pharmacydrug.drug_store = req.body.drug_store
    }
    if (req.body.drug_price != null&& req.body.drug_price != '') {
        res.pharmacydrug.drug_price = req.body.drug_price
    }
    
    res.pharmacydrug.drug_updated_date = addedDate
    try {
        const updatePharmacydrug = await res.pharmacydrug.save()
        res.json(updatePharmacydrug)
    } catch (err){
        res.status(400).json({message: err.message})

    }
    
})
// delete one
router.delete('/:id', getPharmacydrug, async (req, res) => {
    try{
    await Pharmacydrug.findByIdAndDelete(req.params.id)
    res.json({message: "removed Pharmacy drug"})
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getPharmacydrug(req, res, next){
    let pharmacydrug
    try {
        pharmacydrug = await Pharmacydrug.findById(req.params.id)
        if (pharmacydrug == null){
            return res.status(404).json({ message: 'Cannot find pharmacydrug'})
        }
    }catch (err) {
        return res.status(500).json({message : err.message})
    }

    res.pharmacydrug = pharmacydrug
    next()
}

module.exports = router