const mongoose = require('mongoose')

const User = require('./User')
const Series = require('./Series')
const Genre = require('./Genre')
const Chapter = require('./Chapter')
const Comment = require('./Comment')

module.exports = { User, Series, Genre, Chapter, Comment }
