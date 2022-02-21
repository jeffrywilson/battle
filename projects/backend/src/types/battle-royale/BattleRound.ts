import { BeastAttributes } from '../BeastAttributes';
import { BattleRoundProcess } from './BattleRoundProcess';

export interface BattleRound {
  associatedAttribute: BeastAttributes;
  id: number;
  name: string;
  description: string;
  image: string;
  processRound: BattleRoundProcess;
}
