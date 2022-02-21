const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  await hre.run("compile")

  const BattleRoyale = await ethers.getContractFactory("BattleRoyale")
  const battleRoyale = await BattleRoyale.deploy()

  await battleRoyale.deployed()

  console.log("Battle Royale deployed to:", battleRoyale.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
