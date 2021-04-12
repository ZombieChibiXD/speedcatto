const mongoose = require('mongoose')
const { Schema } = mongoose

const NAME = 'User'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ name
  /** @type {String}  */ email
  /** @type {String}  */ username
  /** @type {String}  */ provider
  /** @type {String}  */ hashedPassword
  /** @type {String}  */ authToken
  /** @type {String}  */ biography
  /** @type {String}  */ image
  /** @type {String}  */ permission
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}

const SCHEMA = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  provider: { type: String, default: '' },
  hashedPassword: { type: String, default: '' },
  authToken: { type: String, default: '' },
  biography: { type: String, default: '' },
  image: { type: String, default: '' },
  role: { type: String, default: 'Member' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
