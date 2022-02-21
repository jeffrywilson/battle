import { PatronGift } from '../../types/battle-royale/PatronGift';
import { Beast } from '../../types/Beast';

const processPatronGifts = (beasts: Beast[], gifts: PatronGift[]): Beast[] => {
  console.log(gifts);

  return [...beasts];
};

export default processPatronGifts;
