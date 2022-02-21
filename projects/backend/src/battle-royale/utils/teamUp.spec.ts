import { Beast } from '../../types/Beast';
import { BeastAttributes } from '../../types/BeastAttributes';
import mockBeast from './mocks/mockBeast';

import teamUp from './teamUp';

describe('teamUp', () => {
  const baseStats = {
    might: 2,
    brawn: 2,
    grace: 2,
    wit: 2,
    will: 2,
  };

  it('should return an array', () => {
    const ret = teamUp([], 10, BeastAttributes.might);

    expect(typeof ret).toEqual('object');
    expect(ret.length).toEqual(0);
  });

  it('should return an expected number of teams', () => {
    const beasts: Beast[] = [];

    for (let i = 0; i < 120; i++) {
      beasts.push(
        mockBeast({
          teamPreference: 'stat',
        }),
      );
    }

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    expect(teams.length).toEqual(120 / 4);
  });

  it('should mutate the supplied array to empty it', () => {
    const beasts: Beast[] = Array(120);

    teamUp(beasts, 4, BeastAttributes.might);

    expect(beasts.length).toEqual(0);
  });

  it('should retain all participants upon uneven team sizes', () => {
    const beasts: Beast[] = [];

    for (let i = 1; i <= 123; i++) beasts.push(mockBeast({ tokenId: i }));

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    expect(teams[teams.length - 1].length).toEqual(123 % 4);
  });

  it('should sort teams based on Beast preference', () => {
    const beasts: Beast[] = [];

    for (let i = 1; i <= 40; i++)
      beasts.push(
        mockBeast({
          tokenId: i,
          teamPreference: i % 2 === 0 ? 'stat' : 'faction',
          statBlock: {
            ...baseStats,
            might: i % 4 === 0 ? 5 : 1,
          },
        }),
      );

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    expect(
      teams.filter((t) => t.every((b) => b.teamPreference === 'stat')).length,
    ).toEqual(
      teams.filter((t) => t.every((b) => b.teamPreference === 'faction'))
        .length,
    );
  });

  it('should sort stat teams by attribute', () => {
    const beasts: Beast[] = [];

    for (let i = 1; i <= 40; i++)
      beasts.push(
        mockBeast({
          tokenId: i,
          teamPreference: 'stat',
          statBlock: {
            ...baseStats,
            might: i % 4 === 0 ? 5 : 1,
          },
        }),
      );

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    expect(
      teams[0].every((b) => b.statBlock[BeastAttributes.might] === 5),
    ).toBe(true);
    expect(
      teams[teams.length - 1].every(
        (b) => b.statBlock[BeastAttributes.might] === 1,
      ),
    ).toBe(true);
  });

  it('should sort faction teams', () => {
    const beasts: Beast[] = [];

    for (let i = 1; i <= 40; i++)
      beasts.push(
        mockBeast({
          tokenId: i,
          teamPreference: 'faction',
          faction: i % 2 === 0 ? 'Esher' : 'Valorin',
        }),
      );

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    expect(
      teams.filter((t) => t.every((b) => b.faction === 'Esher')).length,
    ).toEqual(
      teams.filter((t) => t.every((b) => b.faction === 'Valorin')).length,
    );
  });

  it('should return same number of beasts upon irregular pairings', () => {
    const beasts: Beast[] = [];

    for (let i = 1; i <= 400; i++)
      beasts.push(
        mockBeast({
          tokenId: i,
          teamPreference: i % 3 === 0 ? 'stat' : 'faction',
          faction: i % 3 === 0 ? 'Valorin' : 'Valorin',
          statBlock: {
            ...baseStats,
            might: i % 4 === 0 ? 5 : 1,
          },
        }),
      );

    const beastsCount = beasts.length;

    const teams = teamUp(beasts, 4, BeastAttributes.might);

    const count = teams.reduce(
      (agg: Beast[], curr: Beast[]) => [...agg, ...curr],
      [],
    );

    expect(count.length).toEqual(beastsCount);
  });
});
