import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryTable1758990342786 implements MigrationInterface {
    name = 'CreateCategoryTable1758990342786'

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("category_id" SERIAL NOT NULL, "category_name" character varying NOT NULL, "parent_category_id" integer, CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_d6db2bf1b938f69d2ebac5a9de8" FOREIGN KEY ("parent_category_id") REFERENCES "category"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_d6db2bf1b938f69d2ebac5a9de8"`);
            await queryRunner.query(`DROP TABLE "category"`);
        }
}