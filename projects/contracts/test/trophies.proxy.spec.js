const chai = require("chai")
const { solidity } = require("ethereum-waffle")

const useDeployProxy = require("./useDeployProxy.util")

const { expect } = chai

chai.use(solidity)

describe("Trophies Proxy", function () {
  it("Should deploy a contract proxy", async function () {
    const [proxy] = await useDeployProxy("Trophies")

    expect(Object.keys(proxy).length).to.be.greaterThan(0)
  })

  it("Should be able to craft trophy", async function () {
    const [proxy, accounts] = await useDeployProxy("Trophies")

    const owner = accounts[0].address

    const tokenId = 123
    const tokenBalance = 5000

    await proxy.craftTrophy(tokenId, tokenBalance)

    const balance = await proxy.balanceOf(owner, tokenId)

    expect(balance.toNumber()).to.equal(tokenBalance)
  })

  it("Should be able to craft multiple trophies", async function () {
    const [proxy, accounts] = await useDeployProxy("Trophies")

    const owner = accounts[0].address

    const tokenIds = [123, 456, 789]
    const tokenBalances = [5000, 7500, 10000]

    await proxy.craftTrophySet(tokenIds, tokenBalances)

    const balances = await Promise.all([
      proxy.balanceOf(owner, tokenIds[0]),
      proxy.balanceOf(owner, tokenIds[1]),
      proxy.balanceOf(owner, tokenIds[2]),
    ])

    expect(balances.map((bn) => bn.toNumber())).to.have.members(tokenBalances)
  })
})
