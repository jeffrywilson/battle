import { ethers } from "ethers"

import beastsAbi from "../data/abi/Beasts.json"
import getAbiFromJSON from "../utils/getAbiFromJSON"

type UseBeastContractHook = (contractAddress?: string) => {
  address: string
  abi: ethers.ContractInterface
}

const useBeastContract: UseBeastContractHook = (contractAddress = "DEFAULT_CONTRACT_ADDRESS") => {
  const abi = getAbiFromJSON(beastsAbi)
  const address = contractAddress

  return {
    abi,
    address,
  }
}

export default useBeastContract
