"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_user_seq
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE id_user_seq;
    `);
    // Membuat fungsi id_user
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.id_user()
      RETURNS text
      LANGUAGE 'plpgsql'
      COST 100
      VOLATILE PARALLEL UNSAFE
      AS $BODY$
      BEGIN
          RETURN 'USR-0' || nextval('id_user_seq');
      END;
      $BODY$;
    `);
    await queryInterface.createTable("Users", {
      id_user: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_user())"),
      },
      email_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      token: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Users");
    // Menghapus fungsi id_user
    await queryInterface.sequelize.query(`
    DROP FUNCTION IF EXISTS public.id_user();
    `);
    // Hapus sequence id_user_seq
    await queryInterface.sequelize.query(`
    DROP SEQUENCE id_user_seq;
    `);
  },
};
