require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://hemaharivanam99:watermelon@cluster0.qhwcdza.mongodb.net/Users?retryWrites=true&w=majority')
//mongoose.connect('mongodb://0.0.0.0:27017/users',{useNewUrlParser: true})
const db=mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))
 
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const organizationsRouter = require('./routes/organizations')
app.use('/organizations', organizationsRouter)

app.listen(3000, ()=> console.log("server started"))