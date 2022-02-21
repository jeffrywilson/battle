import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BattleRoyale } from '../battle-royale/battle-royale.entity';
import { BattleRoyaleEvent } from '../types/battle-royale/BattleRoyaleEvent';
import { InjectRepository } from '@nestjs/typeorm';

import battle from './utils/battle';

// Mocks for future inputs
import mockBeasts from './utils/mocks/mockBeasts';
import mockEvent from './utils/mocks/mockEvent';

@Injectable()
export class BattleRoyaleService {
  constructor(
    @InjectRepository(BattleRoyale)
    private battleRoyaleRepositoryTable: Repository<BattleRoyale>,
  ) {}

  startBattle(eventId: string): Array<string | string[]> {
    // Get hydrated Beasts from another service
    const beasts = mockBeasts(456, true);
    const event = mockEvent(beasts, eventId, 5);

    const battleLog: Array<string | string[]> = [
      `Battle #${eventId} Has Begun!`,
      ...battle(event),
    ];

    return battleLog;
  }

  async getEvent(eventId: string): Promise<BattleRoyaleEvent> {
    const beasts = mockBeasts(456, true);
    const event = mockEvent(beasts, eventId, 5);
    return event;
  }

  async getAllEvents(): Promise<Array<BattleRoyaleEvent>> {
    const beasts = mockBeasts(456, true);
    const event = mockEvent(beasts, '1', 5);
    const event2 = mockEvent(beasts, '2', 5);
    const events = [event, event2];
    return events;
  }
}
