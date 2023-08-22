'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pegawai.init({
    id_pegawai: DataTypes.STRING,
    nip: DataTypes.STRING,
    nama: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    jenis_kelamin: DataTypes.STRING,
    golongan: DataTypes.STRING,
    eselon: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    tempat_tugas: DataTypes.STRING,
    agama: DataTypes.STRING,
    unit_kerja: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    no_hp: DataTypes.STRING,
    npwp: DataTypes.STRING,
    foto_profil: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Pegawai',
  });
  return Pegawai;
};