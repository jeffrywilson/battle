require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { ethers: hardhatEthers } = require("hardhat")

async function useDeploy(contractName) {
  const Contract = await hardhatEthers.getContractFactory(contractName)

  const contract = await Contract.deploy()

  await contract.deployed()

  const accounts = await hardhatEthers.getSigners()

  return [contract, accounts]
}

module.exports = useDeploy
