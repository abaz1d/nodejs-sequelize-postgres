"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Golongan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Golongan.init(
    {
      nama_golongan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Golongan",
    }
  );
  return Golongan;
};
