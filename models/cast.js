'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cast.init({
    cast_firstName: DataTypes.STRING,
    cast_lastName: DataTypes.STRING,
    cast_phoneNumber: DataTypes.STRING,
    cast_birthYear: DataTypes.INTEGER,
    cast_gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};