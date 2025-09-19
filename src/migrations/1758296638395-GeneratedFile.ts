import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedFile1758296638395 implements MigrationInterface {
    name = 'GeneratedFile1758296638395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partner" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "logo_link" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9af6a8bd7cac55b61babc753853" UNIQUE ("name"), CONSTRAINT "UQ_39ba44d32530f1c7076c182ebc8" UNIQUE ("email"), CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("category_id" SERIAL NOT NULL, "category_name" character varying NOT NULL, "parent_category_id" integer, CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_d6db2bf1b938f69d2ebac5a9de8" FOREIGN KEY ("parent_category_id") REFERENCES "category"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_d6db2bf1b938f69d2ebac5a9de8"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "partner"`);
    }

}
