const mongoose = require('mongoose')
const { Schema } = mongoose
const Series = require('./Series')

const NAME = 'Chapter'

class SCAFFOLD extends mongoose.Document {
  /** @type {String}  */ name
  /** @type {Map<String,String>}  */ panel
  /** @type {String[]}  */ arrangement
  /** @type {Date}    */ createdAt
  /** @type {Date}    */ updatedAt
}
const SCHEMA = new Schema({
  // A slight note, while it is not really nice to do it, we don't need any chapterID unlike
  // in ./Series.js with their `seriesID` because to access this chapter, we would use the
  // Series chapters indexing for their array index as the URL helper, I hope people don't
  // confuse this as the Series "chapter"ing, but rather the way the chapters are served.
  // but people are stupid and this will happen nevertheless, so eh... But I hope it is fixed.
  // chapterID: {type: String, unique: true }
  name: { type: String, default: '' },
  panel: [{ type: String, default: '' }],
  series: { type: Schema.Types.ObjectId, ref: Series.NAME, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
