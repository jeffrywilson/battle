import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BattleRoyaleController } from './battle-royale.controller';
import { BattleRoyaleService } from './battle-royale.service';
import { BattleRoyale } from '../battle-royale/battle-royale.entity';

describe('BattleRoyaleController', () => {
  let controller: BattleRoyaleController;

  const mockBattleRoyale = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BattleRoyaleController],
      providers: [
        BattleRoyaleService,
        {
          provide: getRepositoryToken(BattleRoyale),
          useValue: mockBattleRoyale,
        },
      ],
    }).compile();

    controller = module.get<BattleRoyaleController>(BattleRoyaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
