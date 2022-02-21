import { Beast } from '../Beast';
import { BattleRoyaleLog } from './BattleRoyaleLog';

type First = Beast;
type Second = Beast;
type Third = Beast;
type Defeated = Beast[];

export type FinalRoundOutput = [
  First,
  Second,
  Third,
  Defeated,
  BattleRoyaleLog,
];
