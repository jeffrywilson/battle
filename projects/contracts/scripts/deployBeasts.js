const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  await hre.run("compile")

  const Beasts = await ethers.getContractFactory("Beasts")
  const beasts = await Beasts.deploy()

  await beasts.deployed()

  console.log("Beasts deployed to:", beasts.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
