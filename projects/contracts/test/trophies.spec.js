const chai = require("chai")
const { solidity } = require("ethereum-waffle")

const useDeploy = require("./useDeploy.util")

const { expect } = chai

chai.use(solidity)

// TODO: Determine what's testable in Contract vs Proxy
describe("Trophies", function () {
  it("Should deploy a contract", async function () {
    const [contract] = await useDeploy("Trophies")

    expect(Object.keys(contract).length).to.be.greaterThan(0)
  })
})
