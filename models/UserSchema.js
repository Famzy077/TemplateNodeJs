const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: String,
    lastname: String,
    gender: {
        type: String,
        enum: ['male', 'female']
    }
})
module.exports = mongoose.model('User', UserSchema)