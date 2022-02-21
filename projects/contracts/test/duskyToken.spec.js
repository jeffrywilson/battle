const chai = require("chai")
const { solidity } = require("ethereum-waffle")

const useDeploy = require("./useDeploy.util")

const { expect } = chai

chai.use(solidity)

describe("DuskyToken", function () {
  it("Should deploy a contract", async function () {
    const [contract] = await useDeploy("DuskyToken")

    expect(Object.keys(contract).length).to.be.greaterThan(0)
  })
})
