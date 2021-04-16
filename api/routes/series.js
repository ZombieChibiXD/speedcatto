// eslint-disable-next-line no-unused-vars
const express = require('express')
const { MODEL } = require('../models/User')
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
  app.get('/series', async function (req, res, next) {
    const result = await MODEL.find({}).populate('genres', 'name').exec()
    res.json(result.toString())
  })

  /* GET user by ID. */
  app.get('/series/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
      res.json(users[id])
    } else {
      res.sendStatus(404)
    }
  })
}
