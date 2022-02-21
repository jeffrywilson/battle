import { Injectable, OnModuleInit } from '@nestjs/common';
import { connectEventListenersToBattleRoyaleContract } from './utils/connectEventListeners/connectEventListenersToBattleRoyaleContract';
import { connectEventListenersToBeastsContract } from './utils/connectEventListeners/connectEventListenersToBeastsContract';
import { connectEventListenersToEquipmentContract } from './utils/connectEventListeners/connectEventListenersToEquipmentContract';
import { connectEventListenersToTrophiesContract } from './utils/connectEventListeners/connectEventListenersToTrophiesContract';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    try {
      connectEventListenersToBattleRoyaleContract();
      connectEventListenersToBeastsContract();
      connectEventListenersToEquipmentContract();
      connectEventListenersToTrophiesContract();
    } catch (err) {
      console.log(err);
      return;
    }
    console.log(`AppService module has been initialized.`);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
