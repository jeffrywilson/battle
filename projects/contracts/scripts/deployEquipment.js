const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  await hre.run("compile")

  const Equipment = await ethers.getContractFactory("Equipment")
  const equipment = await Equipment.deploy()

  await equipment.deployed()

  console.log("Equipment deployed to:", equipment.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
