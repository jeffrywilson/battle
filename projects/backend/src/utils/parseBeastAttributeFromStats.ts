import { BeastAttributes } from '../types/BeastAttributes';
import statIndex from './statIndex';

const parseBeastAttributeFromStats = (
  stats: number,
  beastAttribute: BeastAttributes,
): number => parseInt(Array.from(`${stats}`)[statIndex(beastAttribute)], 10);

export default parseBeastAttributeFromStats;
