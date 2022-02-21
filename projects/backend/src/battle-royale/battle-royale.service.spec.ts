import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BattleRoyaleService } from './battle-royale.service';
import { BattleRoyale } from '../battle-royale/battle-royale.entity';

describe('BattleRoyaleService', () => {
  let service: BattleRoyaleService;

  const mockBattleRoyale = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BattleRoyaleService,
        {
          provide: getRepositoryToken(BattleRoyale),
          useValue: mockBattleRoyale,
        },
      ],
    }).compile();

    service = module.get<BattleRoyaleService>(BattleRoyaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a log when computing a battle', () => {
    const battleLog = service
      .startBattle('123')
      .reduce((agg: string[], curr: string | string[]) => {
        if (typeof curr === 'string') return [...agg, curr];
        else return [...agg, ...curr];
      }, []);

    expect((battleLog as string[]).every((l) => typeof l === 'string')).toEqual(
      true,
    );
  });
});
