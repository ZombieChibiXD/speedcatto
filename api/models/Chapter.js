const mongoose = require('mongoose')
const { Schema } = mongoose

const NAME = 'Chapter'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ name
  /** @type {Map<String,String>}  */ panel
  /** @type {String[]}  */ arrangement
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}

const SCHEMA = new Schema({
  name: { type: String, default: '' },
  panel: { type: Map, of: String },
  arrangement: [{ type: String, default: '' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
