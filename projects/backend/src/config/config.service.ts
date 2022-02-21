import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BattleRoyale } from '../battle-royale/battle-royale.entity';
import { User } from '../user/entities/user.entity';
import { Beast } from '../beasts/entities/beast.entity';

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('DB_PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')) || 5432,
      username: this.getValue('DB_USER'),
      password: this.getValue('DB_PW'),
      database: this.getValue('DB_DATABASE'),
      schema: this.getValue('SCHEMA'),
      synchronize: false,
      migrationsRun: true,
      entities: [BattleRoyale, User, Beast],
      migrations: [
        `${__dirname}/../migrations/**/*.ts`,
        `${__dirname}/../migrations/**/*.js`,
      ],
      cli: {
        migrationsDir: 'src/migrations',
      },
      logging: false,
      // ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PW',
  'DB_DATABASE',
  'SCHEMA',
  'JWT_SECRET',
  'JWT_EXPIRES_IN',
  'PASSWORD_SALT_OR_ROUND',
]);

export { configService };
