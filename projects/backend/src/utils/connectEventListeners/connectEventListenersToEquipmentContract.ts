import { ethers } from 'ethers';

import {
  getAddresses,
  DEFAULT_NETWORK,
  DEFAULT_PROVIDER,
  EQUIPMENT_EVENTS,
} from '../../constants';
import { EquipmentAbi } from '../../abi';

const addresses = getAddresses(DEFAULT_NETWORK);

const provider = ethers.providers.getDefaultProvider(DEFAULT_PROVIDER);

export const connectEventListenersToEquipmentContract = () => {
  const contract = new ethers.Contract(
    addresses.EQUIPMENT_ADDRESS,
    EquipmentAbi,
    provider,
  );

  contract.on(
    EQUIPMENT_EVENTS.TRANSFER_SINGLE,
    (operator, from, to, id, value, event) => {
      console.log(operator, from, to, id, value);
    },
  );

  contract.on(
    EQUIPMENT_EVENTS.TRANSFER_BATCH,
    (operator, from, to, ids, values, event) => {
      console.log(operator, from, to, ids, values);
    },
  );

  contract.on(EQUIPMENT_EVENTS.EQUIPMENT_FORGED, (tokenId, event) => {
    console.log(tokenId);
  });

  contract.on(EQUIPMENT_EVENTS.BATCH_EQUIPMENT_FORGED, (tokenIds, event) => {
    console.log(tokenIds);
  });
};
