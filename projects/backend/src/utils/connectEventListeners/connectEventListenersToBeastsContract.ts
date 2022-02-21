import { ethers } from 'ethers';
import { getConnection } from 'typeorm';
import {
  getAddresses,
  DEFAULT_NETWORK,
  DEFAULT_PROVIDER,
  BEASTS_EVENTS,
  ZERO_ADDRESS,
} from '../../constants';
import { BeastsAbi } from '../../abi';
import { BeastsService } from '../../beasts/beasts.service';
import { Beast } from '../../beasts/entities/beast.entity';
import { CreateBeastsDto } from '../../beasts/dto/create-beasts.dto';

const addresses = getAddresses(DEFAULT_NETWORK);

const provider = ethers.providers.getDefaultProvider(DEFAULT_PROVIDER);

export const connectEventListenersToBeastsContract = () => {
  const contract = new ethers.Contract(
    addresses.BEASTS_ADDRESS,
    BeastsAbi,
    provider,
  );

  const connection = getConnection();
  const beastService = new BeastsService(connection.getRepository(Beast));

  contract.on(BEASTS_EVENTS.BEAST_RECRUITED, (tokenId, owner, event) => {
    console.log(tokenId.toString(), owner);

    const createBeastsDto = new CreateBeastsDto();
    createBeastsDto.tokenId = tokenId.toString();
    createBeastsDto.owner = owner;
    beastService.create(createBeastsDto);
  });

  contract.on(BEASTS_EVENTS.TRANSFER, async (from, to, tokenId, event) => {
    if (from == ZERO_ADDRESS) return;
    tokenId = tokenId.toString();
    console.log(from, to, tokenId);

    const beastsByToken = await beastService.findByTokenId(tokenId);
    if (beastsByToken.length == 0) {
      console.log('Not found token ' + tokenId);
      return;
    }

    const beastsByOwner = await beastService.findByOwner(to);
    if (beastsByOwner.length > 0) {
      beastsByToken[0].owner = to;
      await beastService.update(beastsByToken[0]);
    } else {
      await beastService.remove(beastsByToken[0].id);
      console.log('Verifying new user wallet ' + to);
    }
  });
};
