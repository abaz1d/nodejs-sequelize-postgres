"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_jabatan_seq
    await queryInterface.sequelize.query(`
     CREATE SEQUENCE id_jabatan_seq;
   `);
    // Membuat fungsi id_jabatan
    await queryInterface.sequelize.query(`
     CREATE OR REPLACE FUNCTION public.id_jabatan()
     RETURNS text
     LANGUAGE 'plpgsql'
     COST 100
     VOLATILE PARALLEL UNSAFE
     AS $BODY$
     BEGIN
         RETURN 'JBT-0' || nextval('id_jabatan_seq');
     END;
     $BODY$;
   `);
    await queryInterface.createTable("Jabatans", {
      id_jabatan: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_jabatan())"),
      },
      nama_jabatan: {
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
    await queryInterface.addIndex("Jabatans", ["id_jabatan"], {
      unique: true,
      name: "idx_id_jabatan",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Jabatans", "idx_id_jabatan");
    await queryInterface.dropTable("Jabatans");
    // Menghapus fungsi id_jabatan
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS public.id_jabatan();
    `);
    // Hapus sequence id_jabatan_seq
    await queryInterface.sequelize.query(`
     DROP SEQUENCE id_jabatan_seq;
   `);
  },
};
