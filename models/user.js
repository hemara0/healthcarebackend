const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name:{
        type: String
    },
    user_email: {
        type: String
    },
    user_dob:{
        type: Date
    },
    user_mobile: {
        type: Number,
    },
    user_govtids:{
        type: Array
    },
    user_hospitals: {
        type: Array
    },
    user_lastlogin:{ 
        type: Date
    },
    user_registereddate: {
        type: Date,
    },

} , { collection: 'users_basic_data' })

module.exports = mongoose.model('User', userSchema)