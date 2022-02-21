import { BeastAttributes } from '../BeastAttributes';
import { EquipmentType } from '../EquipmentType';

export interface BattleRoyaleEquipment {
  type: EquipmentType;
  passive: boolean;
  attribute: BeastAttributes;
  modifier: number;
}
