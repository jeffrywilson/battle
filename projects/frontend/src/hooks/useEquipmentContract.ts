import { ethers } from "ethers"

import equipmentAbi from "../data/abi/Equipment.json"
import getAbiFromJSON from "../utils/getAbiFromJSON"

type UseEquipmentContractHook = (contractAddress?: string) => {
  address: string
  abi: ethers.ContractInterface
}

const useEquipmentContract: UseEquipmentContractHook = (
  contractAddress = "DEFAULT_CONTRACT_ADDRESS",
) => {
  const abi = getAbiFromJSON(equipmentAbi)
  const address = contractAddress

  return {
    abi,
    address,
  }
}

export default useEquipmentContract
