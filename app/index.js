require('custom-env').env(true)
const express = require('express')
const session = require('express-session')
const logger = require('morgan');
const path = require('path')
const indexRoutes = require('./routes/indexRoutes') 
const errors = require('./middlewares/errors')


class App {
  constructor() {
    this.express = express()
    this.setup()
    this.middlewares()
    this.routes()
    this.errorMiddlewares()
  }
  
  setup() {
    this.express.set('view engine', 'pug')
    this.express.set('views', path.join(__dirname, 'views'))

    this.express.use(logger('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(express.static(path.join(__dirname, 'public')))

    this.express.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false
    }))
  }

  middlewares() {}

  errorMiddlewares() {
    this.express.use(errors.notFoundError);
    this.express.use(errors.errorHandler);
  }
  
  routes() {
    this.express.use('/', indexRoutes)
  }
}

const app = new App()

module.exports = app.express
