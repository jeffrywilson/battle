import { Networks } from './blockchain';

const RINKEBY = {
  BEASTS_ADDRESS: '0x0e9c1D90Ce0c72c2f2bF67D2f56BCa96BCd79d7c',
  BATTLE_ROYALE_ADDRESS: '0xfc861cf117F5BE406e0B584AF068eA837Ef40368',
  EQUIPMENT_ADDRESS: '0xA6037F49410bFc3675b56D24D82F2f903475C460',
  TROPHIES_ADDRESS: '0x350586f49848850d1a1279489CD83F1bF3E5F844',
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.RINKEBY) return RINKEBY;

  throw Error("Network don't support");
};
