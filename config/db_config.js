const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/store')
        console.log('Connect to DB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB