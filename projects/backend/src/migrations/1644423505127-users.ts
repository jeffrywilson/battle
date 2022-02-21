import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1644423505127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "users"
        (
          _id uuid DEFAULT uuid_generate_v4 (),
          email text UNIQUE,
          username text UNIQUE,
          password text,
          temp_password text,
          is_email_verfied boolean, 
          user_logs jsonb,
          created_at timestamp,
          updated_at timestamp,
          PRIMARY KEY (_id)
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE users');
  }
}
