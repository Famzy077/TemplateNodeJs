const express = require('express')
const passport = require('passport')
const UserController = require('../controllers/UserPageController')
const InitialPassport = require('../Strategies/LocalStrategy')
const AuthChecker = require('../Middlewares/AuthChecker')
const router = express.Router()
InitialPassport(passport)

router.route('/register(.html)?')
    .get(AuthChecker.checkAuth,UserController.userRegister)
    .post(UserController.createUser)
router.route('/login(.html)?')
    .get(AuthChecker.checkAuth, UserController.showLogin)
    .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
}), UserController.handleLogin)
router.delete('/', UserController.logout)

module.exports = router;
