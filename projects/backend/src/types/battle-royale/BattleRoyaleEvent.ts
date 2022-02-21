import { Beast } from '../Beast';
import { Faction } from '../Faction';
import { BattleRound } from './BattleRound';
import { FinalBattleRound } from './FinalRound';
import { PatronGift } from './PatronGift';

type RoundNumber = number;

export interface BattleRoyaleEvent {
  beasts: Beast[];
  id: string;
  rounds: BattleRound[];
  finalRound: FinalBattleRound;
  patronGifts: Record<RoundNumber, PatronGift[]>;
  // Determined by Staked Tokens for each Faction
  patronSupport: Record<Faction, number>;
}
