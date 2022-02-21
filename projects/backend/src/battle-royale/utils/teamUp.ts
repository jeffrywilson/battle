import { Beast } from '../../types/Beast';
import { BeastAttributes } from '../../types/BeastAttributes';
import shuffleArr from '../../utils/shuffleArr';

const teamUp = (
  beasts: Beast[],
  numberPerTeam: number,
  associatedAttribute: BeastAttributes,
): Beast[][] => {
  const output: Beast[][] = [];

  // Split groups in preference of 'faction' or 'stat'
  const [faction, unsortedStats]: [Beast[], Beast[]] = beasts.splice(0).reduce(
    (agg, curr) => {
      if (curr.teamPreference === 'faction') return [[...agg[0], curr], agg[1]];
      else return [agg[0], [...agg[1], curr]];
    },
    [[], []],
  );

  // Split factions
  const [esher, valorin]: [Beast[], Beast[]] = faction.reduce(
    (agg, curr) => {
      if (curr.faction === 'Esher') return [[...agg[0], curr], agg[1]];
      else return [agg[0], [...agg[1], curr]];
    },
    [[], []],
  );

  // Sort stats
  const stats = unsortedStats.sort(
    (a, b) =>
      b.statBlock[associatedAttribute] - a.statBlock[associatedAttribute],
  );

  // We have:
  // Esher
  while (esher.length >= numberPerTeam)
    output.push(esher.splice(0, numberPerTeam));
  // Valorin
  while (valorin.length >= numberPerTeam)
    output.push(valorin.splice(0, numberPerTeam));
  // Stats
  while (stats.length >= numberPerTeam)
    output.push(stats.splice(0, numberPerTeam));

  // Place remainder on end, randomized
  const remaining = shuffleArr(
    [...esher.splice(0), ...valorin.splice(0), ...stats.splice(0)],
    true,
  );

  if (!!remaining.length) {
    while (remaining.length >= numberPerTeam) {
      output.push(remaining.splice(0, numberPerTeam));
    }

    output.push(remaining);
  }

  return output;
};

export default teamUp;
