"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_golongan_seq
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE id_golongan_seq;
    `);

    // Membuat fungsi id_golongan
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.id_golongan()
      RETURNS text
      LANGUAGE 'plpgsql'
      COST 100
      VOLATILE PARALLEL UNSAFE
      AS $BODY$
      BEGIN
          RETURN 'GOL-0' || nextval('id_golongan_seq');
      END;
      $BODY$;
    `);

    await queryInterface.createTable("Golongans", {
      id_golongan: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_golongan())"),
      },
      nama_golongan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Golongans");
    // Menghapus fungsi id_golongan
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS public.id_golongan();
    `);
    // Hapus sequence id_golongan_seq
    await queryInterface.sequelize.query(`
      DROP SEQUENCE id_golongan_seq;
    `);
  },
};
