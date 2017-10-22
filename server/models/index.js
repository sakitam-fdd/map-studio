'use strict'
const mongoose = require('mongoose')
const config = require('config')
mongoose.Promise = global.Promise
mongoose.connect(config.get('db'), {
  server: {
    poolSize: 20
  }
}, (err) => {
  if (err) {
    console.error('connect to %s error: ', config.get('db'), err.message)
    process.exit(1)
  }
})

exports.User = require('./user')
