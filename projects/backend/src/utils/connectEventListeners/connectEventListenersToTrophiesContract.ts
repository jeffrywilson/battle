import { ethers } from 'ethers';

import {
  getAddresses,
  DEFAULT_NETWORK,
  DEFAULT_PROVIDER,
  TROPHIES_EVENTS,
} from '../../constants';
import { TrophiesAbi } from '../../abi';

const addresses = getAddresses(DEFAULT_NETWORK);

const provider = ethers.providers.getDefaultProvider(DEFAULT_PROVIDER);

export const connectEventListenersToTrophiesContract = () => {
  const contract = new ethers.Contract(
    addresses.TROPHIES_ADDRESS,
    TrophiesAbi,
    provider,
  );

  contract.on(
    TROPHIES_EVENTS.TRANSFER_SINGLE,
    (operator, from, to, id, value, event) => {
      console.log(operator, from, to, id, value);
    },
  );

  contract.on(
    TROPHIES_EVENTS.TRANSFER_BATCH,
    (operator, from, to, ids, values, event) => {
      console.log(operator, from, to, ids, values);
    },
  );
};
