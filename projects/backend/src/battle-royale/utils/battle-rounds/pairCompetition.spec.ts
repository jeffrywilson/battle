import { BattleRoundOutput } from '../../../types/battle-royale/BattleRoundOutput';
import { BattleRoyaleConsumable } from '../../../types/battle-royale/BattleRoyaleConsumable';
import { BattleRoyaleEquipment } from '../../../types/battle-royale/BattleRoyaleEquipment';
import { TeamPreference } from '../../../types/battle-royale/TeamPreference';
import { Beast } from '../../../types/Beast';
import { BeastAttributes } from '../../../types/BeastAttributes';
import { BeastStatBlock } from '../../../types/BeastStatBlock';
import { Faction } from '../../../types/Faction';

import pairCompetition from './pairCompetition';

describe('Battle Royale Util: pairCompetition', () => {
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
  ];
  const attr: BeastAttributes = BeastAttributes.grace;
  const patronSupport: Record<Faction, number> = {
    Esher: 100,
    Valorin: 100,
  };

  it('should return an outcome', () => {
    const [outcome, _] = pairCompetition({
      beasts,
      associatedAttribute: attr,
      patronSupport,
      patronGifts: [],
    });

    expect(outcome).toBeDefined();
  });

  it('should return a log', () => {
    const [_, log] = pairCompetition({
      beasts,
      associatedAttribute: attr,
      patronSupport,
      patronGifts: [],
    });

    expect(log).toBeDefined();
  });

  it('should consider patron support in contest', () => {
    const factionBeasts: Beast[] = [
      { ...beasts[1], faction: 'Valorin', tokenId: 20 },
      { ...beasts[3], faction: 'Valorin', tokenId: 30 },
      { ...beasts[0], faction: 'Esher', tokenId: 40 },
      { ...beasts[2], faction: 'Esher', tokenId: 50 },
    ];

    const support: Record<Faction, number> = {
      Esher: 1000000,
      Valorin: 1,
    };

    const [victors, defeated]: BattleRoundOutput = pairCompetition({
      beasts: factionBeasts,
      associatedAttribute: attr,
      patronSupport: support,
      patronGifts: [],
    }) as BattleRoundOutput;

    expect(victors.map(({ tokenId }) => tokenId)).toContain(40);
    expect(victors.map(({ tokenId }) => tokenId)).toContain(50);
    expect(defeated.map(({ tokenId }) => tokenId)).toContain(20);
    expect(defeated.map(({ tokenId }) => tokenId)).toContain(30);
  });
});
