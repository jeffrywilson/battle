import { BattleRoundOutput } from '../../../types/battle-royale/BattleRoundOutput';
import { BattleRoundProcess } from '../../../types/battle-royale/BattleRoundProcess';
import { Beast } from '../../../types/Beast';

import rollNumber from '../../../utils/rollNumber';
import shuffleArr from '../../../utils/shuffleArr';
import pairUp from '../pairUp';
import processPatronGifts from '../processPatronGifts';

const pairCompetition: BattleRoundProcess = ({
  beasts,
  associatedAttribute,
  patronSupport,
  patronGifts,
}): BattleRoundOutput => {
  // Guarantee immutability
  // Or, should be mutable?
  const participants = processPatronGifts([...beasts], patronGifts);
  const log: string[] = [];

  const safe: Beast[] = [];
  const eliminated: Beast[] = [];

  const evenNumberOfBeasts: boolean = participants.length % 2 === 0;

  // Get to even by giving random Beast a 'bye'
  if (!evenNumberOfBeasts) safe.push(shuffleArr(participants).pop());
  // Pair up Beasts
  const pairs: Beast[][] = pairUp(participants, associatedAttribute);

  pairs.forEach(([first, second]) => {
    if (!first) {
      safe.push(second);

      return;
    }

    if (!second) {
      safe.push(first);

      return;
    }

    let firstHit = rollNumber(0, first.statBlock[associatedAttribute] * 100);
    let secondHit = rollNumber(0, second.statBlock[associatedAttribute] * 100);

    // Add patron support
    firstHit += patronSupport[first.faction];
    secondHit += patronSupport[second.faction];

    if (firstHit - secondHit >= 0) {
      log.push(`Beast #${first.tokenId} defeats Beast #${second.tokenId}!`);
      log.push(`Beast #${second.tokenId} is eliminated.`);

      safe.push(first);
      eliminated.push(second);
    } else {
      log.push(`Beast #${second.tokenId} defeats Beast #${first.tokenId}!`);
      log.push(`Beast #${first.tokenId} is eliminated.`);

      safe.push(second);
      eliminated.push(first);
    }
  });

  return [safe, eliminated, log];
};

export default pairCompetition;
