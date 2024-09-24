const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')
const createUser = async(req, res) => {
    let {firstname, lastname, gender, email, password } = req.body
    try {
        let hashPass = await bcrypt.hash(password, 10)
        await User.create({
            firstname, lastname, gender, email, password: hashPass
        })
        res.render('auth/register', {
            message: 'User created successfully'
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

const userRegister = async(req, res) => {
    res.render('auth/register', {message: null})
}
const showLogin = async(req, res) => {
    res.render('auth/login')
}
const handleLogin = async(req, res) => {

}
const logout = async(req, res) => {
    req.logOut((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.redirect('/user/login')
    })
}
module.exports = { createUser, userRegister, showLogin, handleLogin, logout }