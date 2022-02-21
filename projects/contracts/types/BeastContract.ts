import { ethers } from "ethers"

export interface BeastContract extends ethers.Contract {
  recruitBeast: (
    to: string,
    uri: string,
    GeneratedBeastAttributes: number[],
    baseToken: number,
  ) => void
}
