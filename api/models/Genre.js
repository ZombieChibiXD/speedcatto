const mongoose = require('mongoose')
const slug = require('slug')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema } = mongoose
const NAME = 'Genre'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ name
  /** @type {String}  */ image
  /** @type {String}  */ description
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}

const SCHEMA = new Schema({
  name: { type: String, unique: true, required: true },
  slug: { type: String, lowercase: true, unique: true },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

SCHEMA.plugin(uniqueValidator, { message: 'is already taken' })

SCHEMA.pre('validate', function (next) {
  if (!this.slug) this.slugify()
  next()
})

SCHEMA.methods.slugify = function () {
  this.slug =
    slug(this.name) +
    '-' +
    parseInt(
      this.createdAt.getTime().toString(36).split('').reverse().join(''),
      36,
    ).toString()
}

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
