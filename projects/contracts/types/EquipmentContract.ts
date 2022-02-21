import { ethers } from "ethers";

export interface EquipmentContract extends ethers.Contract {
  forgeEquipment: (
    forgeSupply: number,
    forgeURI: string,
    forgeId: number,
    forgeType: number,
  ) => void;
  batchForgeEquipment: (
    forgeSupply: number[],
    forgeURIs: string[],
    forgeIds: number[],
    forgeTypes: number[],
  ) => void;
}
