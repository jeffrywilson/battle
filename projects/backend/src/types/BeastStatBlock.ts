import { BeastAttributes } from './BeastAttributes';

export interface BeastStatBlock {
  [BeastAttributes.might]: number;
  [BeastAttributes.brawn]: number;
  [BeastAttributes.grace]: number;
  [BeastAttributes.wit]: number;
  [BeastAttributes.will]: number;
}
