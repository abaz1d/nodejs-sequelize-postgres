"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Agamas",
      [
        { nama_agama: "Islam", createdAt: new Date(), updatedAt: new Date() },
        { nama_agama: "Kristen", createdAt: new Date(), updatedAt: new Date() },
        { nama_agama: "Katolik", createdAt: new Date(), updatedAt: new Date() },
        { nama_agama: "Hindu", createdAt: new Date(), updatedAt: new Date() },
        { nama_agama: "Buddha", createdAt: new Date(), updatedAt: new Date() },
        {
          nama_agama: "Konghucu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Agamas", null, {});
  },
};
