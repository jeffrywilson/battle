import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { BattleRoyaleModule } from './battle-royale/battle-royale.module';
import { BattleRoyale } from './battle-royale/battle-royale.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { BeastsModule } from './beasts/beasts.module';
import { Beast } from './beasts/entities/beast.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([BattleRoyale, User, Beast]),
    BattleRoyaleModule,
    AuthModule,
    UserModule,
    BeastsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
