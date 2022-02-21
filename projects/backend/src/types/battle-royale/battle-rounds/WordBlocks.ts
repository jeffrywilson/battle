import { BeastAttributes } from '../../BeastAttributes';
import { BattleRound } from '../BattleRound';
import { BattleRoundProcess } from '../BattleRoundProcess';

import pairCompetition from '../../../battle-royale/utils/battle-rounds/pairCompetition';

class WordBlocks implements BattleRound {
  id = 100;
  name = 'Word Blocks';
  description =
    'Gather a number of blocks and make words. Make better words than your opponent';
  image = 'url not set';
  associatedAttribute: BeastAttributes.wit;

  processRound: BattleRoundProcess = ({ beasts, patronGifts, patronSupport }) =>
    pairCompetition({
      beasts,
      associatedAttribute: BeastAttributes.wit,
      patronGifts,
      patronSupport,
    });
}

export default WordBlocks;
