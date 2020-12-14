const express = require('express')
const router = express.Router()

const Movies = require('../controllers/movie.js')

router.get('/', Movies.dataMovie)
router.get('/add', Movies.addMovie)
router.post('/add', Movies.postAddMovie)
router.get('/edit/:id', Movies.editMovie)
router.post('/edit/:id', Movies.postEditMovie)
router.get('/delete/:id', Movies.delMovie)

module.exports = router