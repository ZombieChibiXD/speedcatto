// eslint-disable-next-line no-unused-vars
const express = require('express')

/**
 * @param {express.Express}
 */
module.exports = function (app, extern) {
  require('./users')(app)
  require('./test')(app) // This must be last!
}
