import { MigrationInterface, QueryRunner } from 'typeorm';

export class beast1644510033064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              CREATE TABLE IF NOT EXISTS "beast"
              (
                  id serial NOT NULL,
                  tokenId text,
                  owner text,
                  PRIMARY KEY (id)
              );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE beast');
  }
}
