// eslint-disable-next-line no-unused-vars
const { Db } = require('mongodb')

// Functions

/**
 * @param {Db} db Database variable
 */
function getSeries(db) {
  return db.collection('series')
}

// Testing
