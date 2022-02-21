import { BigNumber, ethers } from "ethers"

import { EthereumAddress } from "./EthereumAddress"

export interface BattleRoyaleContract extends ethers.Contract {
  closeBattle: () => void
  closeEnrollment: () => void
  completeBattle: (
    firstPlaceBeast: number,
    secondPlaceBeast: number,
    thirdPlaceBeast: number,
  ) => number
  currentBattle: () => BigNumber
  equipArmor: (beastId: number, armorId: number) => void
  equipWeapon: (beastId: number, weaponId: number) => void
  getBeastIds: () => BigNumber[]
  getPlayer: (beastId: number) => EthereumAddress
  hasJoined: (beastId: number, battleId: number) => boolean
  hasJoinedCurrentBattle: (beastId: number) => boolean
  joinBattle: (beastId: number, options?: { value: BigNumber }) => void
  openEnrollment: () => void
  paused: () => boolean
  setMaxBeasts: (maxBeasts: number) => void
  startBattle: () => number
}
