import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Beast } from './entities/beast.entity';
import { BeastsService } from './beasts.service';

describe('BeastsService', () => {
  let service: BeastsService;
  const mockBeast = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BeastsService,
        {
          provide: getRepositoryToken(Beast),
          useValue: mockBeast,
        },
      ],
    }).compile();

    service = module.get<BeastsService>(BeastsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
