const { Movie, ProductionHouse } = require('./models/index')

Movie.create({
    name: "way back into love",
    releasedYear: 2008,
    "production_id": 1,
    genre: "bucin"
    
})
 .then(data => {
     console.log({data})
 })
 .catch(err => {
     console.log({err})
 })