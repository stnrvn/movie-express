const express = require('express')
const routerMovie = require('./routes/routerMovie.js')
const routerProductionHouse = require('./routes/routerProductionHouse.js')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use( express.urlencoded({extended : false}))

app.use('/movies', routerMovie)
app.use('/productionhouse', routerProductionHouse)

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`)
})