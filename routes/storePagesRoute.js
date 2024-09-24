const express = require('express')
const ProductController = require('../controllers/StorePagesController')
const router = express.Router()
const AuthChecker = require('../Middlewares/AuthChecker')
router.route('/')
.get(AuthChecker.checkNoAuth ,ProductController.getAllProducts)

module.exports = router;