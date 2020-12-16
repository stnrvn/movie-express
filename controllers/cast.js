const { Movie, Cast, MovieCast } = require('../models/index')
const getAgeMovie = require('../helpers/getAgeMovie')

class Casts {
    static dataCast(req, res){
        Cast.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data => {
        res.render('cast/cast', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static dataMovieCast(req, res){
        const id = +req.params.id

        Cast.findByPk(id, {
            include: [Movie]
        })
        .then(data => {
            res.render('cast/cast-movie', { data, getAgeMovie })
        })
        .catch(err => {
            res.render(err)
        })
        // Cast.findAll({
        //     include: [Movie],
        //     where: {
        //         id: id
        //     }
        // })
        // .then(data => {
        //     res.render('cast/cast-movie', { data })
        // })
        // .catch(err => {
        //     res.render(err)
        // })
    }

    static addCast(req, res){
        res.render('cast/cast-add')
    }

    static addCastPost(req, res){
        let opt = {
            cast_firstName : req.body.cast_firstName,
            cast_lastName : req.body.cast_lastName,
            cast_birthYear : +req.body.cast_birthYear,
            cast_phoneNumber : req.body.cast_phoneNumber,
            cast_gender : req.body.cast_gender
        }

        Cast.create(opt)
        .then(() => {
            res.redirect('/cast')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editCast(req, res){
        const id = +req.params.id

        Cast.findAll({
            where: {
                id:id
            }
        })
        .then(data => {
            res.render('cast/cast-edit', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateCast(req, res){
        const id = +req.params.id

        let opt = {
            cast_firstName : req.body.cast_firstName,
            cast_lastName : req.body.cast_lastName,
            cast_birthYear : +req.body.cast_birthYear,
            cast_phoneNumber : req.body.cast_phoneNumber,
            cast_gender : req.body.cast_gender
        }

        Cast.update(opt, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/cast')
        })
        .catch(err => {
            res.send(err)
        })
    }
    
    static delCast(req, res){
        const id = +req.params.id

        Cast.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/cast')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Casts