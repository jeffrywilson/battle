import { Beast } from '../../../types/Beast';
import { EquipmentType } from '../../../types/EquipmentType';

import generateBeastStatBlock from '../../../utils/generateBeastStatBlock';
import rollNumber from '../../../utils/rollNumber';

import mockEquipment from './mockEquipment';

const stats = ['might', 'brawn', 'grace', 'wit', 'will'];

const randomizeStats = (baseStat: string): number => {
  const stats = {
    might: 0,
    brawn: 0,
    grace: 0,
    wit: 0,
    will: 0,
  };

  stats[baseStat] = rollNumber(2, 5);

  Object.keys(stats)
    .filter((stat) => stat !== baseStat)
    .forEach((key) => (stats[key] = rollNumber(1, 3)));

  return parseInt(Object.values(stats).join(''), 10);
};

const mockBeasts = (numberOfBeasts: number, addEquipment: boolean): Beast[] => {
  const mock: Beast[] = [];

  for (let i = 0; i < numberOfBeasts; i++) {
    const baseStats = randomizeStats(stats[rollNumber(0, 4)]);

    mock.push({
      tokenId: i,
      statBlock: generateBeastStatBlock(baseStats),
      baseStats,
      faction: rollNumber(0, 10) > 5 ? 'Esher' : 'Valorin',
      consumables: [],
      equipment: addEquipment
        ? [
            mockEquipment(EquipmentType.oneHanded),
            mockEquipment(EquipmentType.body),
          ]
        : [],
      teamPreference: rollNumber(0, 10) > 5 ? 'stat' : 'faction',
    });
  }

  return mock;
};

export default mockBeasts;
