const mongoose = require('mongoose')
const { Schema } = mongoose

const User = require('./User')
const Series = require('./Series')
const Chapter = require('./Chapter')

const NAME = 'Comment'

class SCAFFOLD extends mongoose.Document {
  /** @type {(Series.SCAFFOLD|Chapter.SCAFFOLD)}  */ of
  /** @type {string}  */ commenter
  /** @type {string}  */ content
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}

const SCHEMA = new Schema({
  of: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onThread',
  },
  onThread: {
    type: String,
    required: true,
    enum: [Series.NAME, Chapter.NAME],
  },
  commenter: { type: Schema.Types.ObjectId, required: true, ref: User.NAME },
  content: { type: String, required: true },
  // If you want to refer to other comment, use the threadID
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
