const express = require('express')
const session = require('express-session')
const logger = require('morgan');
const path = require('path')

require('custom-env').env(process.env.NODE_ENV || 'development')

const indexRoutes = require('./routes/indexRoutes') 
const errors = require('./middlewares/errors')

const app = express()

app.set('view engine', 'pug')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use('/', indexRoutes)

app.use(errors.notFoundError);
app.use(errors.errorHandler);

module.exports = app
