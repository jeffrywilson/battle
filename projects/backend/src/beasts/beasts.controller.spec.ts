import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BeastsController } from './beasts.controller';
import { BeastsService } from './beasts.service';
import { Beast } from './entities/beast.entity';

describe('BeastsController', () => {
  let controller: BeastsController;

  const mockBeasts = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeastsController],
      providers: [
        BeastsService,
        {
          provide: getRepositoryToken(Beast),
          useValue: mockBeasts,
        },
      ],
    }).compile();

    controller = module.get<BeastsController>(BeastsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
