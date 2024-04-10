const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car