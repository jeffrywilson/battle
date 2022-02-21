import { Module } from '@nestjs/common';
import { BattleRoyaleController } from './battle-royale.controller';
import { BattleRoyaleService } from './battle-royale.service';
import { BattleRoyale } from '../battle-royale/battle-royale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BattleRoyale])],
  controllers: [BattleRoyaleController],
  providers: [BattleRoyaleService],
  exports: [BattleRoyaleService],
})
export class BattleRoyaleModule {}
