const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  await hre.run("compile")

  const Trophies = await ethers.getContractFactory("Trophies")
  const trophies = await Trophies.deploy()

  await trophies.deployed()

  console.log("Trophies deployed to:", trophies.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
