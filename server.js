const path = require('path')
const express = require('express')
const cors = require('cors')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
const MethodOverride = require('method-override')
const connectDB = require('./config/db_config')
const storeRoutes = require('./routes/storePagesRoute')
const userRoutes = require('./routes/userRoute')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// Connect to Database
connectDB()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine',  'ejs')
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(flash())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
app.use(MethodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', storeRoutes)
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})