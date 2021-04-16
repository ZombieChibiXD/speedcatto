const express = require('express')
const mongoose = require('mongoose')
// GLOBALS
// global

// Create express instance
const app = express()

mongoose.connect('mongodb://localhost/tester', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Successfully connect to MongoDB.')
})

// Routes conntection
require('./routes')(app)

// Export express app
module.exports = app

// #region ------------- DO NOT MODIFY BELOW ------------

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

// #endregion ------------- DO NOT MODIFY ABOVE ------------
