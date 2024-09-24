const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')

const InitializePassport = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async(emal, password, verify) => {
        try {
            let user = await User.findOne({ email: emal})
            if (!user) {
                return verify(null, null, { message: 'User cannot be found'})
            }
            if(await bcrypt.compare(password, user.password)) {
                return verify(null, user)
            } else {
                return verify(null, null, { message: 'Incorrect E-mail / Password'})
            }
        } catch (error) {
            verify(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        try {
            let user = await User.findById(id)
            if(!user) {
                return done(null, null)
            }
            done(null, user)
        } catch {

        }
    })
}

module.exports = InitializePassport