"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_eselon_seq
    await queryInterface.sequelize.query(`
        CREATE SEQUENCE id_eselon_seq;
      `);

    // Membuat fungsi id_eselon
    await queryInterface.sequelize.query(`
        CREATE OR REPLACE FUNCTION public.id_eselon()
        RETURNS text
        LANGUAGE 'plpgsql'
        COST 100
        VOLATILE PARALLEL UNSAFE
        AS $BODY$
        BEGIN
            RETURN 'ESL-0' || nextval('id_eselon_seq');
        END;
        $BODY$;
      `);
    await queryInterface.createTable("Eselons", {
      id_eselon: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_eselon())"),
      },
      nama_eselon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keterangan_eselon: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Eselons");
    // Menghapus fungsi id_eselon
    await queryInterface.sequelize.query(`
        DROP FUNCTION IF EXISTS public.id_eselon();
      `);
    // Hapus sequence id_eselon_seq
    await queryInterface.sequelize.query(`
        DROP SEQUENCE id_eselon_seq;
      `);
  },
};
