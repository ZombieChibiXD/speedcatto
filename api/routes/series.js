// eslint-disable-next-line no-unused-vars
const express = require('express')
const { Series } = require('../models/index')

const sortQuery = {
  TITLE_ASC: { title: 1 },
  TITLE_DESC: { title: -1 },
  RATING_ASC: { 'meta.rating': 1 },
  RATING_DESC: { 'meta.rating': -1 },
  BOOKMARKS_ASC: { 'meta.bookmark': 1 },
  BOOKMARKS_DESC: { 'meta.bookmark': -1 },
  VIEWS_ASC: { 'meta.view': 1 },
  VIEWS_DESC: { 'meta.view': -1 },
  AUTHOR_ASC: { author: 1 },
  AUTHOR_DESC: { author: -1 },
  UPDATED_ASC: { updatedAt: 1 },
  UPDATED_DESC: { updatedAt: -1 },
}
/**
 * @param {number} page The current Pagination
 * @param {string} searchQuery Series title search query
 * @param {string[]} genreListInc Includes genre ObjectID
 * @param {string[]} genreListExc Excludes genre ObjectID
 * @param {number} perPage Display items per page
 * @returns {Series.SCAFFOLD[]}  An array of Series Documents
 */
async function getSeriesList(
  page = 1,
  searchQuery,
  genreListInc = [],
  genreListExc = [],
  perPage = 20,
  sortMethod = 'TITLE_ASC',
) {
  const query = {}
  if (searchQuery) query.title = { $regex: new RegExp(searchQuery, 'i') }
  else searchQuery = null
  query.genres = {}
  if (genreListInc && genreListInc.length > 0) query.genres.$all = genreListInc
  if (genreListExc && genreListExc.length > 0) query.genres.$nin = genreListExc
  if (Object.keys(query.genres).length === 0) delete query.genres
  if (!(sortMethod in sortQuery)) sortMethod = 'TITLE_ASC'
  const totalItems = (await Series.MODEL.find(query).exec()).length
  const data = await Series.MODEL.find(query)
    .populate('genres', 'name slug -_id')
    .sort(sortQuery[sortMethod])
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec()
  const result = {
    data: [],
    searchQuery,
    totalItems,
    page,
    perPage,
  }
  if (!result.searchQuery) delete result.searchQuery
  data.forEach((item) => {
    result.data.push(item.toJSONFor())
  })
  return result
}
/**
 * @param { express.Express } app
 */
module.exports = function (app) {
  /* GET users listing. */
  app.get('/series/:page?', async function (req, res, next) {
    try {
      const page =
        parseFloat(req.params.page) > 0 ? parseInt(req.params.page) : 1
      const perPage =
        parseInt(req.query.per_page || req.query.perPage) > 0
          ? parseInt(req.query.per_page || req.query.perPage)
          : 10
      const searchQuery = req.query.s || req.query.search || ''
      const sortBy =
        Object.keys(sortQuery)[parseInt(req.query.sort)] ||
        req.query.sort ||
        'TITLE_ASC'
      console.log(sortBy);
      res.json(
        await getSeriesList(page, searchQuery, null, null, perPage, sortBy),
      )
    } catch (error) {
      res.status(500).json({
        message: 'Unexpected error occured!',
        // error: error.toString,
      })
      throw error
    }
  })
}
