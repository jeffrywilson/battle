import { Module } from '@nestjs/common';
import { BeastsController } from './beasts.controller';
import { BeastsService } from './beasts.service';
import { Beast } from './entities/beast.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Beast])],
  controllers: [BeastsController],
  providers: [BeastsService],
  exports: [BeastsService],
})
export class BeastsModule {}
