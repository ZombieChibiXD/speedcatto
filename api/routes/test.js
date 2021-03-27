const { Router } = require('express')

const router = Router()

// Test route
router.use('/test', (req, res) => {
  res.end('Test API!')
})

router.use('/', (req, res) => {
  res.end('Version 0.1!')
})

module.exports = router
