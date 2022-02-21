import { BattleRoyaleConsumable } from '../../types/battle-royale/BattleRoyaleConsumable';
import { BattleRoyaleEquipment } from '../../types/battle-royale/BattleRoyaleEquipment';
import { TeamPreference } from '../../types/battle-royale/TeamPreference';
import { BeastAttributes } from '../../types/BeastAttributes';
import { BeastStatBlock } from '../../types/BeastStatBlock';
import { Faction } from '../../types/Faction';

import pairUp from './pairUp';

describe('Battle Royale Util: pairUp', () => {
  const statBlock = {
    [BeastAttributes.might]: 2,
    [BeastAttributes.brawn]: 2,
    [BeastAttributes.grace]: 2,
    [BeastAttributes.wit]: 2,
    [BeastAttributes.will]: 2,
  };

  const baseBeast: {
    faction: Faction;
    consumables: BattleRoyaleConsumable[];
    equipment: BattleRoyaleEquipment[];
    baseStats: number;
    statBlock: BeastStatBlock;
    teamPreference: TeamPreference;
  } = {
    faction: 'Valorin',
    consumables: [],
    equipment: [],
    baseStats: 22222,
    statBlock,
    teamPreference: 'stat',
  };

  it('should return an array of arrays', () => {
    const pairs = pairUp(
      [
        { ...baseBeast, tokenId: 1 },
        { ...baseBeast, tokenId: 2 },
        { ...baseBeast, tokenId: 3 },
        { ...baseBeast, tokenId: 4 },
        { ...baseBeast, tokenId: 5 },
        { ...baseBeast, tokenId: 6 },
      ],
      BeastAttributes.brawn,
    );

    expect(pairs.length).toEqual(3);
    expect(pairs.map((p) => p.length)).toEqual([2, 2, 2]);
  });

  it('should handle an odd number of Beasts', () => {
    const pairs = pairUp(
      [
        { ...baseBeast, tokenId: 1 },
        { ...baseBeast, tokenId: 2 },
        { ...baseBeast, tokenId: 3 },
        { ...baseBeast, tokenId: 4 },
        { ...baseBeast, tokenId: 5 },
        { ...baseBeast, tokenId: 6 },
        { ...baseBeast, tokenId: 7 },
      ],
      BeastAttributes.brawn,
    );

    expect(pairs.length).toEqual(4);
    expect(pairs.map((p) => p.length)).toEqual([2, 2, 2, 2]);
  });

  it('should return undefined for uneven Beast pairs', () => {
    const pairs = pairUp(
      [
        { ...baseBeast, tokenId: 1 },
        { ...baseBeast, tokenId: 2 },
        { ...baseBeast, tokenId: 3 },
      ],
      BeastAttributes.brawn,
    );

    expect(pairs.length).toEqual(2);
    expect(typeof pairs[1][1]).toEqual('undefined');
  });

  it('should mutate the supplied array to empty it', () => {
    const beasts = [
      { ...baseBeast, tokenId: 1 },
      { ...baseBeast, tokenId: 2 },
    ];

    expect(beasts.length).toEqual(2);

    pairUp(beasts, BeastAttributes.brawn);

    expect(beasts.length).toEqual(0);
  });

  describe('Sorting', () => {
    let beasts;

    beforeEach(() => {
      beasts = [
        {
          ...baseBeast,
          tokenId: 1,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 6,
          },
        },
        {
          ...baseBeast,
          tokenId: 2,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 5,
          },
        },
        {
          ...baseBeast,
          tokenId: 3,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 4,
          },
        },
        {
          ...baseBeast,
          tokenId: 4,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 3,
          },
        },
        {
          ...baseBeast,
          tokenId: 5,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 2,
          },
        },
        {
          ...baseBeast,
          tokenId: 6,
          statBlock: {
            ...statBlock,
            [BeastAttributes.will]: 1,
          },
        },
      ];
    });

    it('should sort highest pertinent attribute to top', () => {
      const [first, second, third] = pairUp(beasts, BeastAttributes.will);

      expect(
        [first[0], second[0], third[0]].map(({ tokenId }) => tokenId),
      ).toEqual([1, 2, 3]);
    });

    it(`should sort lowest pertinent attribute to top for pair's latter Beast`, () => {
      const [first, second, third] = pairUp(beasts, BeastAttributes.will);

      expect(
        [first[1], second[1], third[1]].map(({ tokenId }) => tokenId),
      ).toEqual([6, 5, 4]);
    });

    it('should pair highest attribute with corresponding lowest', () => {
      const pairs = pairUp(beasts, BeastAttributes.will);

      expect(
        pairs.reduce(
          (agg, curr) => [...agg, curr[0].tokenId, curr[1].tokenId],
          [],
        ),
      ).toEqual([1, 6, 2, 5, 3, 4]);
    });
  });
});
