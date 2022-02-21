import { ethers } from 'ethers';

import {
  getAddresses,
  DEFAULT_NETWORK,
  DEFAULT_PROVIDER,
  BATTLE_ROYALE_EVENTS,
} from '../../constants';
import { BattleRoyaleAbi } from '../../abi';

const addresses = getAddresses(DEFAULT_NETWORK);

const provider = ethers.providers.getDefaultProvider(DEFAULT_PROVIDER);

export const connectEventListenersToBattleRoyaleContract = () => {
  const contract = new ethers.Contract(
    addresses.BATTLE_ROYALE_ADDRESS,
    BattleRoyaleAbi,
    provider,
  );

  contract.on(BATTLE_ROYALE_EVENTS.BEAST_JOINED, (beastId, player, event) => {
    console.log(beastId, player);
  });

  contract.on(BATTLE_ROYALE_EVENTS.ENROLLMENT_OPENED, (battleGen, event) => {
    console.log(battleGen);
  });

  contract.on(BATTLE_ROYALE_EVENTS.ENROLLMENT_CLOSED, (battleGen, event) => {
    console.log(battleGen);
  });

  contract.on(
    BATTLE_ROYALE_EVENTS.ARMOR_EQUIPPED,
    (beastId, armorId, event) => {
      console.log(beastId, armorId);
    },
  );

  contract.on(
    BATTLE_ROYALE_EVENTS.WEAPON_EQUIPPED,
    (beastId, weaponId, event) => {
      console.log(beastId, weaponId);
    },
  );

  contract.on(BATTLE_ROYALE_EVENTS.START_BATTLE, (battleNumber, event) => {
    console.log(battleNumber);
  });

  contract.on(BATTLE_ROYALE_EVENTS.BATTLE_COMPLETED, (battleNumber, event) => {
    console.log(battleNumber);
  });

  contract.on(
    BATTLE_ROYALE_EVENTS.FIRST_PLACE,
    (battle, beastId, firstPlace, event) => {
      console.log(battle, beastId, firstPlace);
    },
  );

  contract.on(
    BATTLE_ROYALE_EVENTS.SECOND_PLACE,
    (battle, beastId, secondPlace, event) => {
      console.log(battle, beastId, secondPlace);
    },
  );

  contract.on(
    BATTLE_ROYALE_EVENTS.THIRD_PLACE,
    (battle, beastId, thirdPlace, event) => {
      console.log(battle, beastId, thirdPlace);
    },
  );
};
