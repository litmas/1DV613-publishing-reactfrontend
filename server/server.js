//load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const cors = require('cors')
const connectToDB = require('./config/connecttoDB')
const carsController = require('./controllers/carController')
const userController = require('./controllers/userController')
//create an express app
const app = express()

//configure express app
app.use(express.json())
app.use(cors())

//connect to database
connectToDB()

// routing      
// Now I have a CRUD application I guess

//signing up
app.post('/signup', userController.signup)

//logging in
app.post('/login', userController.login)

//logging out
app.get('/logout', userController.logout)

//fetching cars
app.get('/cars', carsController.fetchCars)

//fetching a single car
app.get('/cars/:id', carsController.fetchOneCar)

//creating car
app.post('/cars', carsController.createCar)

//updating car
app.put('/cars/:id', carsController.updateCar)

//deleting car
app.delete('/cars/:id', carsController.deleteCar)

//start our server
app.listen(process.env.PORT)  
