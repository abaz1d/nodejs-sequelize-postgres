"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Eselons",
      [
        {
          nama_eselon: "I",
          keterangan_eselon: "Menteri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "I",
          keterangan_eselon: "Kepala Lembaga Negara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "I",
          keterangan_eselon: "Pejabat Negara Setingkat Menteri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Sekretaris Jenderal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Inspektur Jenderal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Kepala Badan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Kepala Biro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Kepala Pusat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "II",
          keterangan_eselon: "Kepala Kantor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Sekretaris Daerah Provinsi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Sekretaris Daerah Kabupaten/Kota",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Kepala Bagian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Kepala Subbagian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Kepala Bidang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "III",
          keterangan_eselon: "Kepala Seksi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "IV",
          keterangan_eselon: "Kepala Subbidang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "IV",
          keterangan_eselon: "Kepala Subbagan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "IV",
          keterangan_eselon: "Kepala Urusan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_eselon: "IV",
          keterangan_eselon: "Kepala Subbagian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Eselons", null, {});
  },
};
