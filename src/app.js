const express = require('express')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const compression = require('compression')
const app = express()

// init middleware 
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// app.use(morgan("combined"))
// morgan("common")
// morgan("short")
// morgan("tiny")
// init db

// handle error

// init router
app.get('/',(req, res, next) => {
    strCompress = 'Hello Trinh'
    return res.status(200).json({
        message: 'Welcome Fantipjs',
        metadata: strCompress.repeat(100000)
    })
})
module.exports = app