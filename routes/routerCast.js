const express = require('express')
const router = express.Router()

const Casts = require('../controllers/cast.js')

router.get('/', Casts.dataCast)
router.get('/listmovie/:id', Casts.dataMovieCast)
router.get('/add', Casts.addCast)
router.post('/add', Casts.addCastPost)
router.get('/edit/:id', Casts.editCast)
router.post('/edit/:id', Casts.updateCast)
router.get('/delete/:id', Casts.delCast)

module.exports = router
