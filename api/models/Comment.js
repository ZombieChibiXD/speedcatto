const mongoose = require('mongoose')
const { Schema } = mongoose

const NAME = 'Comment'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ commenter
  /** @type {String}  */ content
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}

const SCHEMA = new Schema({
  commenter: { type: Schema.Types.ObjectId, default: '' },
  content: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
