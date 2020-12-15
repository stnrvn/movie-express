const { Movie, ProductionHouse, Cast, MovieCastConjunction} = require('../models/index')

class Movies{
    static dataMovie(req, res){
        Movie.findAll({
        include: [ProductionHouse],
        order: [
            ['releasedYear', 'DESC']
        ]
        })
        .then(data => {
            res.render('movie/movie', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addMovie(req, res){
        res.render('movie/movie-add')
    }

    static postAddMovie(req, res){
        let opt = {
            name: req.body.name,
            releasedYear: +req.body.releasedYear,
            genre: req.body.genre
        }

        Movie.create(opt)
         .then(() => {
             res.redirect('/movies')
         })
         .catch(err => {
             res.send(err)
         })
    }

    static addMovieCast(req, res){
        const id = +req.params.id
        let dataMovie
        let dataMovieCast
        let result

        Movie.findByPk(id,{
            include: [Cast]
        })
        .then(data => {
            dataMovie = data
            return Cast.findAll()
        })
        .then(resultData => {
            result = resultData
            return MovieCastConjunction.findAll()
        })
        .then(movieCast => {
            res.render('movie/movie-addCast', { result, dataMovie, movieCast})
        })
        .catch(err => {
            res.send(err)
        })
        // Cast.findAll()
        // .then(data => {
        //     dataCast = data
        //     return Movie.findAll({
        //         where: {
        //             id
        //         },
        //         include: Cast
        //     })
        // })
        // .then(result => {
        //     res.render('movie/movie-addCast', { result, dataCast})
        // })
        // .catch(err => {
        //     res.send(err)
        // })
    }

    static addCastPost(req, res){

        let opt = {
            movie_id: +req.params.id,
            cast_id: req.body.cast,
            role: req.body.role
        }

        MovieCastConjunction.create(opt)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => {
            res.send(err)
        })

    }

    static editMovie(req, res){
        const id = +req.params.id
        let dataProductionHouse

        ProductionHouse.findAll()
         .then(data => {
             dataProductionHouse = data
             return Movie.findByPk(id)
         })
         .then(result => {
                 res.render('movie/movie-edit', { result, dataProductionHouse })
         })
         .catch(err => {
             res.send(err)
         })
    }

    static postEditMovie(req, res){
        const id = +req.params.id
        

        let opt = {
            name: req.body.name,
            releasedYear: +req.body.releasedYear,
            genre: req.body.genre,
            production_id: req.body.production_id
        }

        Movie.update(opt, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delMovie(req, res){
        const id = +req.params.id

        Movie.destroy({
            where: {
                id: id
            }
        })
         .then(() => {
             res.redirect('/movies')
         })
         .catch(err => {
             res.send(err)
         })
    }
}

module.exports = Movies