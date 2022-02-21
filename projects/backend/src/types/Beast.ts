import { BattleRoyaleConsumable } from './battle-royale/BattleRoyaleConsumable';
import { BattleRoyaleEquipment } from './battle-royale/BattleRoyaleEquipment';
import { TeamPreference } from './battle-royale/TeamPreference';
import { BeastStatBlock } from './BeastStatBlock';
import { Faction } from './Faction';

export interface Beast {
  tokenId: number;
  // Values maintained in Token Contract
  baseStats: number;
  statBlock: BeastStatBlock;
  faction: Faction;
  consumables: BattleRoyaleConsumable[];
  equipment: BattleRoyaleEquipment[];
  teamPreference: TeamPreference;
}
