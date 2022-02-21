import { BattleRoyaleEquipment } from '../../../types/battle-royale/BattleRoyaleEquipment';
import { BeastAttributes } from '../../../types/BeastAttributes';
import { EquipmentType } from '../../../types/EquipmentType';

import rollNumber from '../../../utils/rollNumber';

const mockEquipment = (
  type: EquipmentType,
  maxModifier = 2,
): BattleRoyaleEquipment => {
  const attrs: BeastAttributes[] = [
    BeastAttributes.might,
    BeastAttributes.brawn,
    BeastAttributes.grace,
    BeastAttributes.wit,
    BeastAttributes.will,
  ];

  return {
    type,
    passive: true,
    attribute: attrs[rollNumber(0, 4)],
    modifier: rollNumber(1, maxModifier),
  };
};

export default mockEquipment;
