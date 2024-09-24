const Product = require('../models/ProductSchema')

const getAllProducts = async(req, res) => {
   
    try {
        const myProducts = await Product.find()
        res.render('index', {
            products: myProducts,
            activeUser: req.user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllProducts }