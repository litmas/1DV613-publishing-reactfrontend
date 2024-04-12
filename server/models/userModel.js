const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
 email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
 },
 password: {
    type: String,
    required: true,
    select: false,
    set: function(value) {
      return bcrypt.hashSync(value, SALT_WORK_FACTOR);
    }
 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
