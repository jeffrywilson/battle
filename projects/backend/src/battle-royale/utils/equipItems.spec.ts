import { BattleRoyaleConsumable } from '../../types/battle-royale/BattleRoyaleConsumable';
import { BattleRoyaleEquipment } from '../../types/battle-royale/BattleRoyaleEquipment';
import { TeamPreference } from '../../types/battle-royale/TeamPreference';
import { Beast } from '../../types/Beast';
import { BeastAttributes } from '../../types/BeastAttributes';
import { BeastStatBlock } from '../../types/BeastStatBlock';
import { EquipmentType } from '../../types/EquipmentType';
import { Faction } from '../../types/Faction';

import equipItems from './equipItems';

describe('Battle Royale Util: equipItems', () => {
  const baseWeapon = {
    attribute: BeastAttributes.might,
    modifier: 2,
    type: EquipmentType.oneHanded,
    passive: true,
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
    teamPreference: 'stat',
    statBlock: {
      [BeastAttributes.might]: 2,
      [BeastAttributes.brawn]: 2,
      [BeastAttributes.grace]: 2,
      [BeastAttributes.wit]: 2,
      [BeastAttributes.will]: 2,
    },
  };

  const beasts: Beast[] = [
    {
      ...baseBeast,
      tokenId: 1,
    },
    {
      ...baseBeast,
      tokenId: 2,
    },
    {
      ...baseBeast,
      tokenId: 3,
    },
    {
      ...baseBeast,
      tokenId: 4,
    },
    {
      ...baseBeast,
      tokenId: 5,
    },
  ];

  it('should return equipped Beasts', () => {
    const [equipped, _] = equipItems(beasts);

    expect(equipped).toBeDefined();
  });

  it('should return a log', () => {
    const [_, log] = equipItems(beasts);

    expect(log).toBeDefined();
  });

  describe('No Equipment', () => {
    it('should return the same Beasts provided', () => {
      const [equipped, _] = equipItems(beasts);

      expect(equipped).toStrictEqual(beasts);
    });

    it('should return a log with two items', () => {
      const [_, log] = equipItems(beasts);

      expect(log.length).toEqual(2);
    });

    it('should return the expected log entries', () => {
      const [_, log] = equipItems(beasts);

      expect(log[0]).toEqual('Beasts are donning their equipment!');
      expect(log[1]).toEqual('No Beasts brought equipment today...');
    });
  });

  describe('With Equipment', () => {
    it('should not mutate the original values', () => {
      equipItems([
        {
          ...beasts[0],
          equipment: [baseWeapon],
        },
      ]);

      expect(beasts[0].statBlock[BeastAttributes.might]).toEqual(2);
    });

    it('should increase the stat value', () => {
      const [first, ...rest] = beasts;

      const [equipped, _] = equipItems([
        {
          ...first,
          equipment: [baseWeapon],
        },
        ...rest,
      ]);

      const original = first.statBlock[BeastAttributes.might];
      const updated = equipped[0].statBlock[BeastAttributes.might];

      expect(updated).toBeGreaterThan(original);
    });

    it('should increase the stat value by an amount equal to modifier', () => {
      const [first, ...rest] = beasts;
      const modifier = 25;

      const [equipped, _] = equipItems([
        {
          ...first,
          equipment: [
            {
              ...baseWeapon,
              modifier,
            },
          ],
        },
        ...rest,
      ]);

      const original = first.statBlock[BeastAttributes.might];
      const updated = equipped[0].statBlock[BeastAttributes.might];

      expect(updated).toEqual(original + modifier);
    });

    it('should increase stats of the same type for multiple pieces', () => {
      const [first, ...rest] = beasts;
      const modifier = 10;

      const [equipped, _] = equipItems([
        {
          ...first,
          equipment: [
            {
              ...baseWeapon,
              modifier,
            },
            {
              ...baseWeapon,
              modifier,
            },
            {
              ...baseWeapon,
              modifier,
            },
          ],
        },
        ...rest,
      ]);

      expect(equipped[0].statBlock[BeastAttributes.might]).toEqual(
        first.statBlock[BeastAttributes.might] + modifier * 3,
      );
    });

    it('should update multiple stats based on equipment attribute', () => {
      const [first, ...rest] = beasts;

      const [equipped, _] = equipItems([
        {
          ...first,
          equipment: [
            { ...baseWeapon, attribute: BeastAttributes.grace },
            { ...baseWeapon, attribute: BeastAttributes.wit },
            { ...baseWeapon, attribute: BeastAttributes.will },
          ],
        },
        ...rest,
      ]);

      expect(equipped[0].statBlock).toEqual({
        might: 2,
        brawn: 2,
        grace: 4,
        wit: 4,
        will: 4,
      });
    });
  });
});
