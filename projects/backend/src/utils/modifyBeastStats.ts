import { BeastAttributes } from '../types/BeastAttributes';
import statIndex from './statIndex';

// As this pattern makes the cap for stats 9
// We will maintain a baseStats numeric value
// And compute statBlocks from that
const modifyBaseStats = (
  stats: number,
  attribute: BeastAttributes,
  modifier: number,
): number =>
  ({
    0: 10000,
    1: 1000,
    2: 100,
    3: 10,
    4: 1,
  }[statIndex(attribute)] *
    modifier +
  stats);

export default modifyBaseStats;
