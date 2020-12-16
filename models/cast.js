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
    fullName(){
      return `${this.cast_firstName} ${this.cast_lastName}`
    }
    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, {
        through: "MovieCasts",
        foreignKey: "cast_id"
      })
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
    hooks: {
        beforeCreate(data, options){
          if(!data.cast_lastName){
            data.cast_lastName = data.cast_firstName
          }
        }
    }
  });
  return Cast;
};