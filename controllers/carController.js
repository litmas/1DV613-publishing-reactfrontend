const Car = require('../models/carModel')

const fetchCars = async (req, res) => {
    //find the cars
    const cars = await Car.find()
    // respond with them
    res.json({ cars})
}

const fetchOneCar = async (req, res) => {
    //get id off the url
    const carId = req.params.id
    // find the note using id
    const car = await Car.findById(carId)
    //respond with the note
    res.json({car})
}

const createCar = async (req, res) => {
    //get the data off the req body
    const {title, body} = req.body

    // find and update the record
     await Car.findByIdAndUpdate(carId, {
        title,
        body
    })

    //find updated note
    const car = await Car.findById(carId)

    //respond with it
    res.json({car: car})
}

const updateCar = async (req, res) => {
    // get the ID off the url
    const carId = req.params.id

    //get the data off the req body
    const {title, body} = req.body

    // find and update the record
     await Car.findByIdAndUpdate(carId, {
        title,
        body
    })

    //find updated note
    const car = await Car.findById(carId)

    //respond with it
    res.json({car})
}

const deleteCar =  async (req, res) => {
    //get id off of URL
    const carId = req.params.id 
    //delete the record
    await Car.deleteOne({id: carId})
    //respond
    res.json({ success: 'record deleted'})
}

module.exports = {
    fetchCars,
    fetchOneCar,
    createCar,
    updateCar,
    deleteCar
}