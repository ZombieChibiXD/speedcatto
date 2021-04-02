// eslint-disable-next-line no-unused-vars
const express = require('express')
/**
 * @param { express.Router } app
 */
module.exports = function (app) {
  // Test route
  app.use('/test', (req, res) => {
    res.end('Test API!')
  })

  app.use('/', (req, res) => {
    res.end('Version 0.1!')
  })
}
