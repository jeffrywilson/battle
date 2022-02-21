import { ethers } from "ethers"

const getAbiFromJSON = (jsonBlob: unknown): ethers.ContractInterface => {
  const { abi = [] } = JSON.parse(JSON.stringify(jsonBlob))

  return abi
}

export default getAbiFromJSON
