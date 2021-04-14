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

setTimeout(async () => {
  const user = User.create()
  user.name = 'My user name'
  user.email = 'something@oddd.cosm'
  user.username = 'ZombieChibixd12'
  user.setPassword('mypassword')
  await user.save()
}, 1000)
