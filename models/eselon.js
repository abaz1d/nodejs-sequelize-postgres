'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eselon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Eselon.init({
    nama_eselon: DataTypes.STRING,
    keterangan_eselon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eselon',
  });
  return Eselon;
};