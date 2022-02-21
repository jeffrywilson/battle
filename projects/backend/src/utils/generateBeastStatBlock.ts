import { BeastAttributes } from '../types/BeastAttributes';
import { BeastStatBlock } from '../types/BeastStatBlock';

import parseBeastAttributeFromStats from './parseBeastAttributeFromStats';

const generateBeastStatBlock = (stats: number): BeastStatBlock => ({
  [BeastAttributes.might]: parseBeastAttributeFromStats(
    stats,
    BeastAttributes.might,
  ),
  [BeastAttributes.brawn]: parseBeastAttributeFromStats(
    stats,
    BeastAttributes.brawn,
  ),
  [BeastAttributes.grace]: parseBeastAttributeFromStats(
    stats,
    BeastAttributes.grace,
  ),
  [BeastAttributes.wit]: parseBeastAttributeFromStats(
    stats,
    BeastAttributes.wit,
  ),
  [BeastAttributes.will]: parseBeastAttributeFromStats(
    stats,
    BeastAttributes.will,
  ),
});

export default generateBeastStatBlock;
