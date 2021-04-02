const path = require('path')
const zipDir = path.join(__dirname, './../../download/43.zip')
const imagesFolder = './../../images/'
const seriesID = '000002'
const extractDir = imagesFolder + seriesID + '/43'
const destinationDir = path.join(__dirname, extractDir)

module.exports = { zipDir, destinationDir }
