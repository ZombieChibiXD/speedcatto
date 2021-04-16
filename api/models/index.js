const mongoose = require('mongoose')

const User = require('./User')
const Series = require('./Series')
const Genre = require('./Genre')
const Chapter = require('./Chapter')
const Comment = require('./Comment')

module.exports = { User, Series, Genre, Chapter, Comment }

mongoose.connect('mongodb://localhost/tester', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Successfully connect to MongoDB.')
})
async function a() {
  const result = await Series.MODEL.find({}).populate('genres', 'name').exec()
  const s = []
  result.forEach((result) => s.push(result))
  console.log(s)
}

a()
