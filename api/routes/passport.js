// eslint-disable-next-line no-unused-vars
const express = require('express')
const passport = require('passport')
/**
 * @param { express.Express } app
 */
module.exports = function (app) {
  /* GET users listing. */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  )
  app.get('/auth/google/redirect', passport.authenticate('google'))
}
