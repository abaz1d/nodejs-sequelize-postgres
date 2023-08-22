"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Membuat sequence id_pegawai_seq
    await queryInterface.sequelize.query(`
     CREATE SEQUENCE id_pegawai_seq;
   `);
    await queryInterface.sequelize.query(`
     CREATE SEQUENCE nip_seq;
   `);
    // Membuat fungsi id_pegawai
    await queryInterface.sequelize.query(`
     CREATE OR REPLACE FUNCTION public.id_pegawai()
     RETURNS text
     LANGUAGE 'plpgsql'
     COST 100
     VOLATILE PARALLEL UNSAFE
     AS $BODY$
     BEGIN
         RETURN 'AGM-0' || nextval('id_pegawai_seq');
     END;
     $BODY$;
   `);
    await queryInterface.createTable("Pegawais", {
      id_pegawai: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("(public.id_pegawai())"),
      },
      nip: Sequelize.STRING,
      nama: Sequelize.STRING,
      tempat_lahir: Sequelize.STRING,
      tanggal_lahir: Sequelize.DATE,
      jenis_kelamin: Sequelize.STRING(1),
      tempat_tugas: Sequelize.STRING,
      agama: {
        type: Sequelize.STRING,
        references: {
          model: "Agamas",
          key: "id_agama",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
      eselon: {
        type: Sequelize.STRING,
        references: {
          model: "Eselons",
          key: "id_eselon",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
      golongan: {
        type: Sequelize.STRING,
        references: {
          model: "Golongans",
          key: "id_golongan",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
      jabatan: {
        type: Sequelize.STRING,
        references: {
          model: "Jabatans",
          key: "id_jabatan",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
      unit_kerja: {
        type: Sequelize.STRING,
        references: {
          model: "UnitKerjas",
          key: "id_uker",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
      alamat: Sequelize.TEXT,
      no_hp: Sequelize.STRING,
      npwp: Sequelize.STRING,
      foto_profil: Sequelize.BLOB,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // Tambahkan indeks pada kolom agama, eselon, golongan, jabatan, dan unit_kerja
    await queryInterface.addIndex("Pegawais", ["agama"], {
      name: "idx_pegawai_agama",
    });
    await queryInterface.addIndex("Pegawais", ["eselon"], {
      name: "idx_pegawai_eselon",
    });
    await queryInterface.addIndex("Pegawais", ["golongan"], {
      name: "idx_pegawai_golongan",
    });
    await queryInterface.addIndex("Pegawais", ["id_pegawai"], {
      name: "idx_pegawai_id_pegawai",
    });
    await queryInterface.addIndex("Pegawais", ["jabatan"], {
      name: "idx_pegawai_jabatan",
    });
    await queryInterface.addIndex("Pegawais", ["unit_kerja"], {
      name: "idx_pegawai_unit_kerja",
    });
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION public.generate_nip()
      RETURNS trigger AS $$
      BEGIN
          IF NEW.nama IS NOT NULL THEN
              NEW.nip := '1213056900' || nextval('nip_seq')::text;
          ELSE
              NEW.nip := NULL;
          END IF;
          RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;

      CREATE TRIGGER trigger_generate_nip
      BEFORE INSERT
      ON "Pegawais"
      FOR EACH ROW
      EXECUTE FUNCTION public.generate_nip();
    `);
  },
  async down(queryInterface, Sequelize) {
    // Hapus trigger
    await queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS trigger_generate_nip ON "Pegawais";
      DROP FUNCTION IF EXISTS public.generate_nip();
    `);
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_agama");
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_eselon");
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_golongan");
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_id_pegawai");
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_jabatan");
    await queryInterface.removeIndex("Pegawais", "idx_pegawai_unit_kerja");

    await queryInterface.dropTable("Pegawais");
    // Menghapus fungsi id_pegawai
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS public.id_pegawai();
    `);
    // Hapus sequence id_pegawai_seq
    await queryInterface.sequelize.query(`
      DROP SEQUENCE id_pegawai_seq;
    `);
    await queryInterface.sequelize.query(`
      DROP SEQUENCE nip_seq;
    `);
  },
};
