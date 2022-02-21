import { Beast } from '../../types/Beast';
import { BeastAttributes } from '../../types/BeastAttributes';

const pairUp = (participants: Beast[], attr: BeastAttributes): Beast[][] => {
  // Sort by stat
  participants = participants.sort(
    (a, b) => b.statBlock[attr] - a.statBlock[attr],
  );

  // Split group into halves
  // Removes all Beasts from participant group
  const upper = participants.splice(0, Math.ceil(participants.length / 2));
  // Set lowest value to match with upper value in pairing
  const lower = participants.splice(0).reverse();

  return upper.map((u, i) => [u, lower[i]]);
};

export default pairUp;
