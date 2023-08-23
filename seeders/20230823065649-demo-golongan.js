"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Golongans",
      [
        { nama_golongan: "I/a", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "I/b", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "I/c", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "I/d", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "I/e", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "II/a", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "II/b", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "II/c", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "II/d", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "II/e", createdAt: new Date(), updatedAt: new Date() },
        {
          nama_golongan: "III/a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_golongan: "III/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_golongan: "III/c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_golongan: "III/d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_golongan: "III/e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { nama_golongan: "IV/a", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "IV/b", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "IV/c", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "IV/d", createdAt: new Date(), updatedAt: new Date() },
        { nama_golongan: "IV/e", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Golongans", null, {});
  },
};
