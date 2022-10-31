import { MigrationInterface, QueryRunner } from "typeorm";

export class createAddress1667186137185 implements MigrationInterface {
    name = 'createAddress1667186137185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL, "district" character varying(100) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressesId" uuid, CONSTRAINT "REL_26a719ca228cd83b596b68bb3c" UNIQUE ("addressesId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
