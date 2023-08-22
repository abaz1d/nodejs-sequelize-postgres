'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitKerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UnitKerja.init({
    kategori: DataTypes.STRING,
    nama_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UnitKerja',
  });
  return UnitKerja;
};