const express = require('express')
const routerMovie = require('./routes/routerMovie.js')
const routerProductionHouse = require('./routes/routerProductionHouse.js')
const routerCast = require('./routes/routerCast.js')

const app = express()
const port = 3000

const { Movie, ProductionHouse, Cast, MovieCastConjunction } = require('./models/index')

app.set('view engine', 'ejs')

app.use( express.urlencoded({extended : false}))

app.use('/movies', routerMovie)
app.use('/productionhouse', routerProductionHouse)
app.use('/cast', routerCast)

// app.get('/testjoin', (req, res) => {
//     Cast.findAll({
//         include: [Movie]
//     })
//      .then(data => {
//         res.send(data)
//      })
//      .catch(err => {
//          res.send(err)
//      })
    
// })

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`)
})