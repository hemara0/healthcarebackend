const mongoose = require('mongoose')

const providerLoginSchema = new mongoose.Schema({
    provider_username:{
        type: String
    },
    provider_password:{
        type: String
    },
    provider_id:{
        type: String
    }
},{
    collection: "providerlogin"
})

module.exports = mongoose.model('ProviderLogin', providerLoginSchema)