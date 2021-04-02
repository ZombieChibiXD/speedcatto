const mongoose = require('mongoose')
const { Schema } = mongoose
const Chapter = require('./Chapter')
const Genre = require('./Genre')

const NAME = 'Series'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ title
  /** @type {String}  */ author
  /** @type {String}  */ description
  /** @type {String}  */ image
  /** @type {String[]}  */ chapters
  /** @type {String[]}  */ genres
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
  /** @type {Object}  */ meta
}

const SCHEMA = new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  chapters: [{ type: Schema.Types.ObjectId, ref: Chapter.NAME }],
  genres: [{ type: Schema.Types.ObjectId, ref: Genre.NAME }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  meta: {
    rating: { type: Number, default: 0 },
    favs: { type: Number, default: 0 },
  },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
