'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCastConjunction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieCastConjunction.init({
    movie_id: DataTypes.INTEGER,
    cast_id: DataTypes.INTEGER,
    role: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'MovieCastConjunction',
  });
  return MovieCastConjunction;
};