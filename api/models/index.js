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

// Add
setTimeout(async () => {
    let genre, series, genreIDs = [];
    genre = Genre.create()
    genre.name = 'Shounen'
    genre.description = 'Shounen, directly translated from japanese as `boys`, is a genre dedicated towards the male youth in Japan. The characteristic of this genre consist of action, a little bit of (a lot) echi, and various boyish centric stuff'
    genreIDs.push(genre._id)
    await genre.save()
    genre = Genre.create()
    genre.name = 'Shoujo'
    genre.description = 'Shoujo, directly translated from Japanese as `girls`, is a genre dedicated towards the female youth in Japan. The characteristic of this genre consist of romance, cute stuffs, and various girlish centric stuffs'
    genreIDs.push(genre._id)
    await genre.save()
    genre = Genre.create()
    genre.name = 'Action'
    genre.description = 'Action, is a genre that contains a lot of fighing or struggle in nature. This genre has quite the amount of fight scene and standoffs of characters in the story.'
    genreIDs.push(genre._id)
    await genre.save()
    genre.name = 'Romance'
    genre.description = 'Romance, a genre of love, where lovers exchange their feelings for one another, being in a relationship, or even getting married! Everything about heart-warming stories are in this genre!'
    genreIDs.push(genre._id)
    await genre.save()
    series = Series.create()
    series.title = 'My Love with you'
    series.titleShorthand = 'MLwU'
    series.author = 'Miyamazaki Atsushi'
    series.overview = 'Tanaka, a highschooler, is having a rough time at school. Not good at sports, not that sociable, an example of a social outcast. What others did not know is Tanaka is talented in Woodcarving, a tradition from his family. This talent is then found out by his classmate, Himiko. Will love bloom between them for the same passion that they have?'
    series.addGenre(genreIDs[3])
    series.addGenre(genreIDs[2])
    await series.save()
}, 1000)
