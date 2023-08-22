"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_uker_seq
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE id_uker_seq;
    `);

    // Membuat fungsi id_uker
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.id_uker()
      RETURNS text
      LANGUAGE 'plpgsql'
      COST 100
      VOLATILE PARALLEL UNSAFE
      AS $BODY$
      BEGIN
          RETURN 'UK-0' || nextval('id_uker_seq');
      END;
      $BODY$;
    `);
    await queryInterface.createTable("UnitKerjas", {
      id_uker: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_uker())"),
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama_unit: {
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
    await queryInterface.dropTable("UnitKerjas");
    // Menghapus fungsi id_uker
    await queryInterface.sequelize.query(`
     DROP FUNCTION IF EXISTS public.id_uker();
   `);
    // Hapus sequence id_uker_seq
    await queryInterface.sequelize.query(`
     DROP SEQUENCE id_uker_seq;
   `);
  },
};
