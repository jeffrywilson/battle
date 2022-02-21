import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BattleRoyaleService } from './battle-royale.service';

// TODO: /beastbattle route as prefix in all controllers?
@ApiTags('Battle Royale')
@Controller('/battle-royale')
export class BattleRoyaleController {
  constructor(private battleRoyaleService: BattleRoyaleService) {}

  @Get('/')
  getAllEvents() {
    return this.battleRoyaleService.getAllEvents();
  }

  @Get('/:eventId')
  getEvent(@Param('eventId') eventId: string) {
    return this.battleRoyaleService.getEvent(eventId);
  }
}
