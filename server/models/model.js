const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'practice'
  // authSource - set to my login and pw if I have connection issues
})

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', usersSchema)

module.exports = {
  User
}