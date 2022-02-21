import { BattleRoyaleConsumable } from '../../../types/battle-royale/BattleRoyaleConsumable';
import { BattleRoyaleEquipment } from '../../../types/battle-royale/BattleRoyaleEquipment';
import { TeamPreference } from '../../../types/battle-royale/TeamPreference';
import { Beast } from '../../../types/Beast';
import { BeastStatBlock } from '../../../types/BeastStatBlock';
import { Faction } from '../../../types/Faction';
import rollNumber from '../../../utils/rollNumber';

interface MockBeastArg {
  tokenId?: number;
  baseStats?: number;
  statBlock?: BeastStatBlock;
  faction?: Faction;
  consumables?: BattleRoyaleConsumable[];
  equipment?: BattleRoyaleEquipment[];
  teamPreference?: TeamPreference;
}

const mockBeast = ({
  tokenId = 100,
  baseStats = 22222,
  statBlock = {
    might: 2,
    brawn: 2,
    grace: 2,
    wit: 2,
    will: 2,
  },
  faction = rollNumber(0, 10) > 5 ? 'Esher' : 'Valorin',
  consumables = [],
  equipment = [],
  teamPreference = rollNumber(0, 10) > 5 ? 'stat' : 'faction',
}: MockBeastArg): Beast => ({
  tokenId,
  baseStats,
  statBlock,
  faction,
  consumables,
  equipment,
  teamPreference,
});

export default mockBeast;
