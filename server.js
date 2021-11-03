import "dotenv/config.js"
import express from "express"
//* connects to the db with mongoose 
import "./config/database.js" 
import createError from "http-errors"
import path from "path"
import { fileURLToPath } from 'url'
import  cookieParser from 'cookie-parser'
import logger from 'morgan'
import methodOverride from "method-override"


import { router as flightsRouter } from "./routes/flights.js"
import { router as indexRouter } from  "./routes/index.js"
import { router as destinationsRouter } from "./routes/destinations.js"

const app = express ()

// view engine 
app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
    )
    app.set('view engine', 'ejs')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(logger('dev'))
app.use(
    express.static(
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
        )
        )
app.use(methodOverride("_method"))

// mounted routers
app.use('/', indexRouter)
app.use('/flights', flightsRouter)
app.use('/destinations', destinationsRouter)
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

export {
    app
}