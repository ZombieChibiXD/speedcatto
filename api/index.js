const express = require('express')

// GLOBALS
// global

// Create express instance
const app = express()

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
