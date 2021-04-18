const multer = require('multer')

const upload = multer({ dest: './download' })

module.exports = upload
