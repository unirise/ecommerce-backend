import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedFile1758296638395 implements MigrationInterface {
    name = 'GeneratedFile1758296638395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partner" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "logo_link" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9af6a8bd7cac55b61babc753853" UNIQUE ("name"), CONSTRAINT "UQ_39ba44d32530f1c7076c182ebc8" UNIQUE ("email"), CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "partner"`);
    }

}
