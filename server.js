//load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const connectToDB = require('./config/connecttoDB')
const Car = require('./models/carModel')

//create an express app
const app = express()

//configure express app
app.use(express.json())

//connect to database
connectToDB()

// routing      
// Now I have a CRUD application I guess
app.get('/',(req, res) => {
    res.json({hello: 'world'})
})

app.get('/cars', async (req, res) => {
    //find the cars
    const cars = await Car.find()
    // respond with them
    res.json({ cars: cars})
})

//fetching a single car
app.get('/cars/:id', async (req, res) => {
    //get id off the url
    const carId = req.params.id
    // find the note using id
    const car = await Car.findById(carId)
    //respond with the note
    res.json({car: car})
})

app.post('/cars', async (req, res) => {
    //get the sent in data off req body 
    const title = req.body.title
    const body = req.body.body

    //create a car with it 

    const car = await Car.create({
        title: title,
        body: body
    })

    //respond with a new car
    res.json({car: car})
})

app.put('/cars/:id', async (req, res) => {
    // get the ID off the url
    const carId = req.params.id

    //get the data off the req body
    const title = req.body.title
    const body = req.body.body

    // find and update the record
     await Car.findByIdAndUpdate(carId, {
        title: title,
        body: body
    })

    //find updated note
    const car = await Car.findById(carId)

    //respond with it
    res.json({car: car})
})

app.delete('/cars/:id', async (req, res) => {
    //get id off of URL
    const carId = req.params.id 
    //delete the record
    await Car.deleteOne({id: carId})
    //respond
    res.json({ success: 'record deleted'})
})

//start our server
app.listen(process.env.PORT)  
