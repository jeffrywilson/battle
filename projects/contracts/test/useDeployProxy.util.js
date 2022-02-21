require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("@openzeppelin/hardhat-upgrades")

const { ethers: hardhatEthers } = require("hardhat")

async function useDeployProxy(contractName, contractArgs) {
  const Contract = await hardhatEthers.getContractFactory(contractName)

  const contractProxy = await upgrades.deployProxy(Contract, contractArgs)

  await contractProxy.deployed()

  const accounts = await hardhatEthers.getSigners()

  return [contractProxy, accounts]
}

module.exports = useDeployProxy
