const mongoose = require('mongoose')
const { Schema } = mongoose
const Series = require('./Series')
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
  image: { type: String, default: '' },
  series: [{ type: Schema.Types.ObjectId, ref: Series.NAME }],
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
