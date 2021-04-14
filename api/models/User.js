const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema } = mongoose

const secret = ''

const Chapter = require('./Chapter')
const UserPermission = require('./UserPermission')

const NAME = 'User'

class DOCUMENT extends mongoose.Document {
  /** @type {String}  */ name
  /** @type {String}  */ email
  /** @type {String}  */ username
  /** @type {String}  */ provider
  /** @type {String}  */ hash
  /** @type {String}  */ hash
  // /** @type {String}  */ authToken
  /** @type {String}  */ biography
  /** @type {String}  */ image
  /** @type {Number}  */ permission
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt

  /**
   * Check if user password is valid
   * @type {function}
   * @param {string} password User password
   * @returns {boolean} Is password valid, or false
   */
  validPassword

  /**
   * Set user password
   * @param {string} password User password
   */
  setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex')
  }
}

const SCHEMA = new Schema({
  name: String,
  email: {
    type: String,
    default: '',
    lowercase: true,
    sparse: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
    index: true,
  },
  provider: { type: String, default: '' },
  hash: String,
  salt: String,
  // authToken: String,
  biography: String,
  image: String,
  permission: { type: Number, default: UserPermission.MEMBER },

  bookmark: [{ type: Schema.Types.ObjectId, ref: Chapter.NAME }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

SCHEMA.plugin(uniqueValidator, { message: 'is already taken' })

/**
 * Check if user password is valid
 * @param {string} password User password
 * @returns {boolean} Is password valid, or false
 */
SCHEMA.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
  return this.hash === hash
}
/**
 * Set user password
 * @param {string} password User password
 */
SCHEMA.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
}

SCHEMA.methods.generateJWT = function () {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    secret,
  )
}
/**
 * Bookmarks a series user likes
 * @param {string} id Series _id
 */
SCHEMA.methods.bookmarkSeries = function (id) {
  if (id.length > 0) this.bookmark.push(id)
  return this.save()
}

const MODEL = mongoose.model(NAME, SCHEMA)
const create = function () {
  /** @type {DOCUMENT} */
  const constructor = new MODEL()
  return constructor
}
module.exports = { NAME, SCHEMA, MODEL, DOCUMENT, create }
