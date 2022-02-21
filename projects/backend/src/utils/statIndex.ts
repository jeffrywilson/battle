import { BeastAttributes } from '../types/BeastAttributes';

const statIndex = (attr: BeastAttributes): number =>
  ({
    [BeastAttributes.might]: 0,
    [BeastAttributes.brawn]: 1,
    [BeastAttributes.grace]: 2,
    [BeastAttributes.wit]: 3,
    [BeastAttributes.will]: 4,
  }[attr]);

export default statIndex;
