const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    Mobile: String,
    Version: Number,
    Category: String,
    Year: Number,
    Price: Number,
    Model: String
})

module.exports = mongoose.model('Product', ProductSchema)