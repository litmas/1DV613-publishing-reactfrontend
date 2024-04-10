//load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const connectToDB = require('./config/connecttoDB')

//create an express app
const app = express()

//connect to database
connectToDB()

// routing 
app.get('/',(req, res) => {
    res.json({hello: 'world'})
})
//start our server
app.listen(process.env.PORT)  
