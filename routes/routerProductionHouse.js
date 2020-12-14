const express = require('express')
const router = express.Router()

const productions = require('../controllers/production.js')

router.get('/', productions.dataProduction)

module.exports = router