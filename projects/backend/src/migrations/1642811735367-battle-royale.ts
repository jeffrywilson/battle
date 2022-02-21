import { MigrationInterface, QueryRunner } from 'typeorm';

export class battleRoyale1642811735367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE IF NOT EXISTS "battle-royal"
          (
              id uuid NOT NULL,
              start_date timestamp,
              beasts text[],
              battle_logs jsonb,
              winners text[],
              staked_accounts text[],
              PRIMARY KEY (id)
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE battle-royale');
  }
}
