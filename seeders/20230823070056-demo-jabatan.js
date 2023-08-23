"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Jabatans",
      [
        {
          nama_jabatan: "Kepala Sekretariat Utama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Penyusun Laporan Keuangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Surveyor Pemetaan Pertama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Analis Data Survei dan Pemetaan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Perancang Per-UU-an Utama IV/e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Kepala Biro Perencanaan, Kepegawaian dan Hukum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Widyaiswara Utama IV/e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Analis Kepegawaian Madya IV/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Kepala Sub Bidang Kerjasama dan Pelayanan Riset, DKP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Analis Hukum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Peneliti Pertama III/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Surveyor Pemetaan Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Analis Jabatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "Kepala Subbag Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Tambahkan data jabatan lainnya sesuai kebutuhan
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jabatans", null, {});
  },
};
