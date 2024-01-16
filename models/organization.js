const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    organization_name:{
        type: String
    },

    organization_practitioners: [ {
        practitionerId: {type: String},
        status: {type: String},
    }],
    organization_contact: [
        {
            mobile: {type: String},
            landline: {type: String},
            fax: {type: String},
            email: {type: String},
            website: {type: String},
            socialMedia: {type: String},
        }
    ],
    organization_payment: [
        {
            accountType: {type: String},
            accountName: {type: String},
            ifscCode: {type: String},
            accountNumber: {type: String},
            accountNickname: {type: String},
        }
    ],
    organization_lastlogin:{ 
        type: Date
    },
    organization_registered_date: {
        type: Date,
    },
    organization_address_street: {
        type: String
    },
    organization_pincode: {
        type: String
    },
    organization_state: {
        type: String
    },
    organization_city: {
        type: String
    },
    organization_country: {
        type: String
    },

} , { collection: 'organizations_basic_data' })

module.exports = mongoose.model('Organization', organizationSchema)