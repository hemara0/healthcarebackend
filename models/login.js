const mongoose = require('mongoose')

const userLoginSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String
    },
    patient_id:{
        type: String
    }
},{
    collection: "login"
})

module.exports = mongoose.model('UserLogin', userLoginSchema)