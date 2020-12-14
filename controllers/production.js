const { Movie, ProductionHouse} = require('../models/index')

class Productions {
    static dataProduction(req, res){
        ProductionHouse.findAll({
        order: [
            ['production_name', 'ASC']
        ]
        })
        .then(data => {
            res.render('production/home', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Productions