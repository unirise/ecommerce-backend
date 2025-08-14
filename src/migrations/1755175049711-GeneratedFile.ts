import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedFile1755175049711 implements MigrationInterface {
    name = 'GeneratedFile1755175049711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Category" ("category_id" SERIAL NOT NULL, "category_name" character varying NOT NULL, "parent_category_id" integer NOT NULL, CONSTRAINT "PK_0132db99add61303c1f236142bd" PRIMARY KEY ("category_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Category"`);
    }

}
