const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose
const Chapter = require('./Chapter')
const Genre = require('./Genre')

const NAME = 'Series'

/**
 * Mongoose Series document scaffold
 */
class SCAFFOLD extends mongoose.Document {
  /**
   * Series title
   * @type {string} title  */
  title
  /**
   * Series title shorthand, for use in SeriesID generation
   * @type {string} title  */
  titleShorthand
  /**
   * Series ID, for use in linking and public consumptions.
   * Format is [TitleShortHand]-[Modified Timestamp]
   * @type {string} title  */
  seriesID

  /**
   * @typedef AltLanguage
   * @type {object}
   * @property {string} language - Language source
   * @property {string} title - The language's series title
   */

  /**
   * Listing of all possible alternative title
   * @type {AltLanguage[]}
   * */
  altTitle

  /** @type {string}  */
  author

  /**
   * Series overview description
   * @type {string}
   * */
  overview

  /**
   * Series cover image
   * @type {string}  */
  image

  /**
   * Series and Chapter schema relationship connector
   * @type {string[]}  */
  chapters

  /**
   * Series genre list
   * @type {string[]}  */
  genres

  /**
   * When this series is added to the database
   * @type {Date}    */
  createdAt

  /**
   * When this series is added to the database
   * @type {Date}    */
  updatedAt

  /**
   * @typedef MetaObject
   * @type {object}
   * @property {number} rating Series rating
   * @property {number} bookmark Series user bookmark count
   * @property {number} view Series user view count
   */

  /**
   * @type {MetaObject}
   */
  meta
}
/**
 * Generates titleShorthand, in case of user input is not prevalent.
 * @param {string} str input string, preferably series title
 * @returns {string}
 */
function generateTitleShorthand(str) {
  let result = ''
  const stringSplit = str.split(' ')
  if (stringSplit.length > 1) {
    stringSplit.forEach((element) => {
      if (element.length > 0) result += element[0]
    })
  } else result = str.substring(0, 5)
  return result
}

const SCHEMA = new Schema({
  title: String,
  titleShorthand: String,
  // Please turn this into an array in the future so that if example the shorthand
  // is changed for some good reason (humans am I right...) and some people bookmarked
  // the old seriesID as the URL to the series, they will still be directed here
  // and everything is nice and cool, and everything in between.
  // the newest seriesID would be used as URL though.¥
  // ----------------------------------------------------
  // OH, prevent, no... [ REFRAIN ] FROM using seriesID as IDs in backend, this is
  // ONLY USED FOR URL AND CLIENT PURPOSES!
  seriesID: {
    type: String,
    index: true,
    unique: true,
  },
  altTitle: [{ language: String, title: String }],
  author: String,
  overview: String,
  image: String,
  chapters: [{ type: Schema.Types.ObjectId, ref: Chapter.NAME }],
  genres: [{ type: Schema.Types.ObjectId, ref: Genre.NAME, unique: true }],
  meta: {
    rating: { type: Number, default: 0 },
    bookmark: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})
SCHEMA.pre('validate', function (next) {
  if (!this.titleShorthand)
    this.titleShorthand = generateTitleShorthand(this.title)
  if (!this.seriesID) {
    /**
     * @type {Date}
     */
    const date = this.createdAt || Date.now()
    const shorthand =
      this.titleShorthand || generateTitleShorthand(this.title) || ''

    const dateServe = parseInt(
      date.getTime().toString(36).split('').reverse().join(''),
      36,
    ).toString()

    this.seriesID = `${slug(shorthand)}-${dateServe}`
  }

  next()
})
SCHEMA.methods.addGenre = function (genre) {
  this.genres.push(genre._id)
}

SCHEMA.methods.toJSONFor = function () {
  /** @type {SCAFFOLD} */
  return {
    title: this.title,
    seriesID: this.seriesID,
    altTitle: this.altTitle,
    author: this.author,
    overview: this.overview,
    image: this.image,
    chapters: this.chapters,
    genres: this.genres,
    meta: this.meta,
    lastUpdated: this.updatedAt,
  }
}

const MODEL = mongoose.model(NAME, SCHEMA)

/**
 *
 * @returns {SCAFFOLD} New series document
 */
const create = function () {
  const constructor = new MODEL()
  return constructor
}

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD, create }
