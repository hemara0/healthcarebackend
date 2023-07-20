const mongoose = require('mongoose')

const pharmacydrugSchema = new mongoose.Schema({
    drug_name:{
        type: String
    },
    drug_category:{
        type: String
    },
    drug_companies:[{
        companyId: {type: String},
        companyName: {type: String},
        drugStatus: {type: String},
        drug_price: {type: String},
    }],

    drug_store:[{
        storeId:{type: String},
        storeName:{type: String},
        drugStock:{type: String},
        drug_price: {type: String},
    }],

    drug_price:{
        type: String
    },
    drug_registered_date:{
        type: Date
    },
    drug_updated_date:{
        type: Date
    },
    // drug_sideeffects:{
    //     type: Array
    // }
   
} , { collection: 'pharmacydrug_data' })

module.exports = mongoose.model('Pharmacydrug', pharmacydrugSchema)