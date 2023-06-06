const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name:{
        type: String
    },
    user_email: {
        type: String
    },
    user_dob:{
        type: String
    },
    user_mobile: {
        type: String,
    },
    user_govtids:[{
        idType: {
            type: String,
          },
        idNumber: {
            type: String,
     
          }}]
    ,
    user_hospitals: [
        {
        hospitalName: {
            type: String,
         
        },
        visits: [
            {
                visitDescription: {
                    type: String,
            
                },
                visitDate: {
                    type: Date,
                    
                },      
            }

          ]
        }
      ],
    user_orders: { appointment:[
        {
            hospitalId: {type: String},
            doctorId: {type: String},
            bookingDate: {type: String},
            visitDate: {type: String},
            visitTime: {type: String},
            reasonOfVisit: {type: String},
            status:{type: String}
        }
    ]}
    ,
  
    user_lastlogin:{ 
        type: Date
    },
    user_registereddate: {
        type: Date,
    },
    user_bloodgroup: {
        type: String
    },
    user_address_street: {
        type: String
    },
    user_pincode: {
        type: String
    },
    user_state: {
        type: String
    },
    user_city: {
        type: String
    },
    user_country: {
        type: String
    },

} , { collection: 'users_basic_data' })

module.exports = mongoose.model('User', userSchema)