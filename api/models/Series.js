const mongoose = require('mongoose')
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
  titleShorthand: {
    type: String,
    default() {
      return generateTitleShorthand(this.title)
    },
  },
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
    default() {
      const date = this.createdAt || Date.now()
      const shorthand =
        this.titleShorthand || generateTitleShorthand(this.title) || ''
      /**
       *
       * @param {Array} arr
       * @returns {Array}
       */
      const getShuffledArr = (arr) => {
        const newArr = arr.slice()
        for (let i = newArr.length - 1; i > 0; i--) {
          const rand = Math.floor(Math.random() * (i + 1))
          ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
        }
        return newArr
      }
      // This ~may~ will(?) have an error in the parsec future, which means
      // very far into the future, because space and time is connected.
      // But the point is that, while this will cause an error in that time
      // the database is built so that if this error happens, you'll just
      // need to re-upload / rename the seriesID, and you'd be perfectly fine
      const dateServe = getShuffledArr(
        date.getTime().toString().split(''),
      ).join('')

      return `${shorthand}-${dateServe}`
    },
  },
  altTitle: [{ language: String, title: String }],
  author: String,
  overview: String,
  image: String,
  chapters: [{ type: Schema.Types.ObjectId, ref: Chapter.NAME }],
  genres: [{ type: Schema.Types.ObjectId, ref: Genre.NAME }],
  meta: {
    rating: { type: Number, default: 0 },
    bookmark: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const MODEL = mongoose.model(NAME, SCHEMA)

module.exports = { NAME, SCHEMA, MODEL, SCAFFOLD }
