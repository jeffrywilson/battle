import { Beast } from '../Beast';
import { BeastAttributes } from '../BeastAttributes';
import { Faction } from '../Faction';
import { BattleRoundOutput } from './BattleRoundOutput';
import { FinalRoundOutput } from './FinalRoundOutput';
import { PatronGift } from './PatronGift';

export type BattleRoundProcess = (round: {
  beasts: Beast[];
  associatedAttribute?: BeastAttributes;
  patronSupport: Record<Faction, number>;
  // TODO: Add Patron Gifts
  patronGifts: PatronGift[];
}) => BattleRoundOutput | FinalRoundOutput;
