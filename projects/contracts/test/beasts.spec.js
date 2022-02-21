const chai = require("chai")
const { solidity } = require("ethereum-waffle")

const useDeploy = require("./useDeploy.util")

const { assert, expect } = chai

chai.use(solidity)

describe("Beasts", function () {
  const stats = 12345

  it("Should deploy a contract", async function () {
    const [contract] = await useDeploy("Beasts")

    expect(Object.keys(contract).length).to.be.greaterThan(0)
  })

  it("Should recruit a beast and transfer to purchaser", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    const buyerAddress = accounts[1].address

    await contract.recruitBeast(buyerAddress, "baseuri", stats, 10, 10)

    const ownerAddress = await contract.ownerOf(1)

    expect(ownerAddress).to.equal(buyerAddress)
  })

  it("Should begin tokenId at 1", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    await contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)

    await expect(contract.ownerOf(0)).to.be.revertedWith(
      "ERC721: owner query for nonexistent token",
    )

    assert.isString(await contract.ownerOf(1))
  })

  it("Should increment tokenId", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    const buyerOneAddress = accounts[1].address
    const buyerTwoAddress = accounts[2].address
    const buyerThreeAddress = accounts[3].address

    await contract.recruitBeast(buyerOneAddress, "baseuri", stats, 10, 10)
    await contract.recruitBeast(buyerTwoAddress, "baseuri", stats, 10, 10)
    await contract.recruitBeast(buyerThreeAddress, "baseuri", stats, 10, 10)

    const ownerOne = await contract.ownerOf(1)
    const ownerTwo = await contract.ownerOf(2)
    const ownerThree = await contract.ownerOf(3)

    expect(ownerOne).to.equal(buyerOneAddress)
    expect(ownerTwo).to.equal(buyerTwoAddress)
    expect(ownerThree).to.equal(buyerThreeAddress)
  })

  it("Should emit a BeastRecruited event on recruitment", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    await expect(contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)).to.emit(
      contract,
      "BeastRecruited",
    )
  })

  it("Should provide tokenId and address for BeastRecruited event", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    await expect(contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10))
      .to.emit(contract, "BeastRecruited")
      .withArgs(1, accounts[1].address)
  })

  it("Should set proper stats for Beast", async function () {
    const [contract, accounts] = await useDeploy("Beasts")

    await contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)

    const beastStats = await contract.beastStats(1)

    expect(beastStats).to.equal(stats)
  })

  describe("Max Beasts per Family", () => {
    it("Should allow a max number of Beasts to be minted for a family", async function () {
      const [contract] = await useDeploy("Beasts")

      // Sets base to 1,000 per family
      expect(await contract.maxFamilyMint()).to.equal(1000)

      await contract.setMaxFamilyMint(50)

      expect(await contract.maxFamilyMint()).to.equal(50)
    })

    it("Should reject a mint when the cap minted has been met", async function () {
      const [contract, accounts] = await useDeploy("Beasts")

      await contract.setMaxFamilyMint(2)

      await contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)
      await contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)

      await expect(contract.recruitBeast(accounts[1].address, "baseuri", stats, 10, 10)).to.be
        .reverted
    })
  })
})
