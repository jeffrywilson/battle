export enum EquipmentType {
  oneHanded = 'oneHanded',
  offHand = 'offHand',
  twoHanded = 'twoHanded',
  body = 'body',
  head = 'head',
  hands = 'hands',
  feet = 'feet',
}

export const EquipmentTypeDisplayNames = {
  [EquipmentType.oneHanded]: 'One-Handed Weapon',
  [EquipmentType.offHand]: 'Off-Hand Weapon',
  [EquipmentType.twoHanded]: 'Two-Handed Weapon',
  [EquipmentType.body]: 'Body Armor',
  [EquipmentType.head]: 'Head Armor',
  [EquipmentType.hands]: 'Hands',
  [EquipmentType.feet]: 'Feet',
};
