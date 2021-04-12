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

const createSeries = function (series) {
  return Series.MODEL.create(series).then((docSeries) => {
    console.log('\n>> Created Series:\n', docSeries)
    return docSeries
  })
}
const createGenre = function (genre) {
  return Genre.MODEL.create(genre).then((docGenre) => {
    console.log('\n>> Created Series:\n', docGenre)
    return docGenre
  })
}

const addGenreToSeries = function (seriesId, genre) {
  return Series.MODEL.findByIdAndUpdate(
    seriesId,
    { $push: { genres: genre._id } },
    { new: true, useFindAndModify: false },
  )
}

const addSeriesToGenre = function (genreId, series) {
  return Genre.MODEL.findByIdAndUpdate(
    genreId,
    { $push: { series: series._id } },
    { new: true, useFindAndModify: false },
  )
}

const getSeriesWithGenres = function (id) {
  return Series.MODEL.findById(id).populate(Genre.NAME)
}

const getGenresWithSeries = function (id) {
  return Genre.MODEL.findById(id).populate(Series.NAME)
}

const run = async function () {
  /**
   * @type {Series.SCAFFOLD}
   */
  const series = {}
  series.title = 'My Series title'
  series.author = 'My series author'
  series.description = 'An elaborate series description'

  const ser1 = await createSeries(series)

  /**
   * @type {Genre.SCAFFOLD}
   */
  const genre = {}
  genre.name = 'My GenreA'
  genre.description = 'Genre A description'

  const GenreA = await createGenre(genre)

  genre.name = 'My GenreB'
  genre.description = 'Genre B description'

  const GenreB = await createGenre(genre)

  let res = await addGenreToSeries(ser1._id, GenreA)
  console.log('\n>> ser1:\n', res)

  res = await addSeriesToGenre(GenreA._id, ser1)
  console.log('\n>> GenreA:\n', res)

  res = await addGenreToSeries(ser1._id, GenreB)
  console.log('\n>> ser1:\n', res)

  res = await addSeriesToGenre(GenreB._id, ser1)
  console.log('\n>> GenreB:\n', res)

  series.title = 'My Series title 2'
  series.author = 'My series author 2'
  series.description = 'An elaborate series description 2'
  const ser2 = await createSeries(series)

  res = await addGenreToSeries(ser2._id, GenreB)
  console.log('\n>> ser2:\n', res)

  res = await addSeriesToGenre(GenreB._id, ser2)
  console.log('\n>> GenreB:\n', res)

  const mySeries = await getSeriesWithGenres(ser1._id).exec((err, series) => {
    if (err) return console.error(err)
    return series
  })
  console.log(mySeries)
  const myGenre = await getGenresWithSeries(GenreB._id).exec((err, genre) => {
    if (err) return console.error(err)
    return genre
  })
  console.log(myGenre)
}

const something = async function () {
  const items = await Series.MODEL.find({}).populate('genres', 'name').exec()

  for (const item of items) {
    console.log(item.title)
    console.log(item.genres.toString())
  }
}
setTimeout(async () => {
  await run()
  await something()
}, 1000)
// EOF
