const User = require('../models/userModel');
const bcrypt = require('bcrypt')

async function signup(req, res) {
    try {
    //get the email and password from req body
    const {email, password} = req.body
    
    //hash password
    const hashedPassword = bcrypt.hashSync(password, 10)

    //create a user with the data
    await User.create({email, password: hashedPassword})
    //respond
    res.sendStatus(200)
    } catch(error) {
        console.log('BLUP BLUP PULL UP', error)
        res.sendStatus(400)
    }
}

function login(req, res) {
}

function logout(req, res) {}

module.exports = {
    signup,
    login,
    logout
}