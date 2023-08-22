"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_agama_seq
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE id_agama_seq;
    `);

    // Membuat fungsi id_agama
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.id_agama()
      RETURNS text
      LANGUAGE 'plpgsql'
      COST 100
      VOLATILE PARALLEL UNSAFE
      AS $BODY$
      BEGIN
          RETURN 'AGM-0' || nextval('id_agama_seq');
      END;
      $BODY$;
    `);

    await queryInterface.createTable("Agamas", {
      id_agama: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_agama())"),
      },
      nama_agama: {
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
    await queryInterface.dropTable("Agamas");
    // Menghapus fungsi id_agama
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS public.id_agama();
    `);
    // Hapus sequence id_agama_seq
    await queryInterface.sequelize.query(`
      DROP SEQUENCE id_agama_seq;
    `);
  },
};
