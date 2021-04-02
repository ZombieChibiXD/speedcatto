// eslint-disable-next-line no-unused-vars
const express = require('express')
/**
 * @param { express.Express } app
 */
module.exports = function (app) {
  const users = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' },
  ]

  /* GET users listing. */
  app.get('/users', function (req, res, next) {
    res.json(users)
  })

  /* GET user by ID. */
  app.get('/users/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
      res.json(users[id])
    } else {
      res.sendStatus(404)
    }
  })
}
