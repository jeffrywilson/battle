import { BattleRound } from '../../../types/battle-royale/BattleRound';
import { BattleRoundProcess } from '../../../types/battle-royale/BattleRoundProcess';
import { BattleRoyaleEvent } from '../../../types/battle-royale/BattleRoyaleEvent';
import { Beast } from '../../../types/Beast';
import { BeastAttributes } from '../../../types/BeastAttributes';

import rollNumber from '../../../utils/rollNumber';

const randomizeRounds = (no: number): BattleRound[] => {
  const rounds: BattleRound[] = [];

  const attrs: BeastAttributes[] = [
    BeastAttributes.might,
    BeastAttributes.brawn,
    BeastAttributes.grace,
    BeastAttributes.wit,
    BeastAttributes.will,
  ];

  for (let i = 0; i < no; i++) {
    rounds.push({
      associatedAttribute: attrs[rollNumber(0, 4)],
      id: i,
      name: `Round Name ${i}`,
      description: `This round is ${i} tough`,
      image: `image-url-${i}`,
      processRound: ((beasts: Beast) => {
        console.log('Processing');

        return [beasts, [], []];
      }) as unknown as BattleRoundProcess,
    });
  }

  return [];
};

const mockEvent = (
  beasts: Beast[],
  id: string,
  numberOfTasks: number,
): BattleRoyaleEvent => ({
  beasts,
  id,
  // Only need 1 round
  finalRound: {
    ...randomizeRounds(1)[0],
    processRound: () => {
      return [
        {} as Beast,
        {} as Beast,
        {} as Beast,
        [] as Beast[],
        ['Final Round!'],
      ];
    },
  },
  rounds: randomizeRounds(numberOfTasks),
  patronGifts: {
    1: ['Round 1'],
    2: ['Round 2'],
    3: ['Round 3'],
    4: ['Round 4'],
    5: ['Round 5'],
  },
  patronSupport: {
    Esher: rollNumber(0, 100),
    Valorin: rollNumber(0, 100),
  },
});

export default mockEvent;
