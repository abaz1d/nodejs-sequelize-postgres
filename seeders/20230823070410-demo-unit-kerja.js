"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UnitKerjas",
      [
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Kantor Kelurahan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Kantor Kecamatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Pendidikan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Kesehatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Sosial",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Pekerjaan Umum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Perhubungan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Pelayanan Masyarakat",
          nama_unit: "Dinas Lingkungan Hidup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pemerintahan",
          nama_unit: "Kantor Pemerintahan Daerah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pemerintahan",
          nama_unit: "Kementerian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pemerintahan",
          nama_unit: "Lembaga Negara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pembangunan",
          nama_unit: "Badan Usaha Milik Negara (BUMN)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pembangunan",
          nama_unit: "Badan Usaha Milik Daerah (BUMD)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Penelitian dan Pengembangan",
          nama_unit:
            "Lembaga Penelitian dan Pengembangan Ilmu Pengetahuan dan Teknologi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pertahanan dan Keamanan",
          nama_unit: "Tentara Nasional Indonesia (TNI)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kategori: "Tugas-tugas Pertahanan dan Keamanan",
          nama_unit: "Kepolisian Negara Republik Indonesia (Polri)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UnitKerjas", null, {});
  },
};
