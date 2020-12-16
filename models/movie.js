'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse, {
        foreignKey: "production_id",
        sourceKey: "id"
      },
      Movie.belongsToMany(models.Cast, {
        through: "MovieCasts",
        foreignKey: "movie_id"
      })
      )
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    releasedYear: {
      type: DataTypes.INTEGER,
      validate: {
        lapYear(date){
          if((date % 4 === 0) && (date % 100 !== 0) || (date % 400 === 0)){
            throw new Error('data Movie tidak dapat ditambahkan')
          }
        }
      }
    },
    genre: DataTypes.STRING,
    production_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};