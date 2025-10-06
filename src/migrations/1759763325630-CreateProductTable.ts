import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedFile1759763325630 implements MigrationInterface {
    name = 'GeneratedFile1759763325630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "code" character varying NOT NULL, "id_category" character varying NOT NULL, "id_partner" character varying NOT NULL, "tax_percentage" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
