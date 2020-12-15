const { Movie, ProductionHouse, Cast, MovieCastConjunction } = require('./models/index')

// Movie.create({
//     name: "way back into love",
//     releasedYear: 2008,
//     "production_id": 1,
//     genre: "bucin"
    
// })
//  .then(data => {
//      console.log({data})
//  })
//  .catch(err => {
//      console.log({err})
//  })

// Cast.create({
//     cast_firstName: "Andre",
//     cast_lastName: "Stingky",
//     cast_phoneNumber: "08123456789",
//     cast_birthYear: 1972,
//     cast_gender: "male",
    
// })
//  .then(data => {
//      console.log({data})
//  })
//  .catch(err => {
//      console.log({err})
//  })

MovieCastConjunction.create({
    movie_id: "3",
    cast_id: "1"
})
 .then(data => {
     console.log({data})
 })
 .catch(err => {
     console.log({err})
 })



