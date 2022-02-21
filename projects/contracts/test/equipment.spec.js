const chai = require("chai")
const { solidity } = require("ethereum-waffle")

const useDeploy = require("./useDeploy.util")

const { expect } = chai

chai.use(solidity)

describe("Equipment", function () {
  it("Should deploy a contract", async function () {
    const [contract] = await useDeploy("Equipment")

    expect(Object.keys(contract).length).to.be.greaterThan(0)
  })

  describe("Single Token", function () {
    it("Should mint a single token", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeId = 20020125

      await contract.forgeEquipment(500, `api.service/${forgeId}`, forgeId, 200201)

      expect(await contract.exists(forgeId)).to.equal(true)
    })

    it("Should mint a single token with correct quantity", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeId = 20020125
      const forgeSupply = 10000000

      await contract.forgeEquipment(forgeSupply, `api.service/${forgeId}`, forgeId, 200201)

      const totalSupply = await contract.totalSupply(forgeId)

      expect(totalSupply).to.equal(forgeSupply)
    })

    it("Should mint a single token with correct tokenUri", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeId = 20020125
      const forgeUri = `api.service/${forgeId}`

      await contract.forgeEquipment(500, forgeUri, forgeId, 200201)

      const tokenUri = await contract.uri(forgeId)

      expect(tokenUri).to.equal(forgeUri)
    })

    it("Should mint a single token with correct tokenType", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeId = 20020125
      const forgeType = 200205

      await contract.forgeEquipment(500, `api.service/${forgeId}`, forgeId, forgeType)

      const tokenType = await contract.tokenType(forgeId)

      expect(tokenType.toNumber()).to.equal(forgeType)
    })
  })

  describe("Batch Token", function () {
    it("Should support batch mint token lists", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeSupply = [500, 500, 500]

      const forgeIds = [20020125, 20020126, 20020127]

      await contract.batchForgeEquipment(
        forgeSupply,
        [`api.service/${forgeIds[0]}`, `api.service/${forgeIds[1]}`, `api.service/${forgeIds[2]}`],
        forgeIds,
        [200201, 200201, 200201],
      )

      const exists = await Promise.all([
        contract.exists(forgeIds[0]),
        contract.exists(forgeIds[1]),
        contract.exists(forgeIds[2]),
      ])

      expect(exists).to.have.members([true, true, true])
    })

    it("Should mint the correct quantity for each token", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeSupply = [123456789, 987654321, 564738291]

      const forgeIds = [20020125, 20020126, 20020127]

      await contract.batchForgeEquipment(
        forgeSupply,
        [`api.service/${forgeIds[0]}`, `api.service/${forgeIds[1]}`, `api.service/${forgeIds[2]}`],
        forgeIds,
        [200201, 200201, 200201],
      )

      const supply = await Promise.all([
        contract.totalSupply(forgeIds[0]),
        contract.totalSupply(forgeIds[1]),
        contract.totalSupply(forgeIds[2]),
      ])

      expect(supply.map((bn) => bn.toNumber())).to.have.members(forgeSupply)
    })

    it("Should mint the correct quantity for each token", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeIds = [20020125, 20020126, 20020127]

      const forgeUris = [
        `api.service/${forgeIds[0]}`,
        `api.service/${forgeIds[1]}`,
        `api.service/${forgeIds[2]}`,
      ]

      await contract.batchForgeEquipment(
        [500, 500, 500],
        forgeUris,
        forgeIds,
        [200201, 200201, 200201],
      )

      const supply = await Promise.all([
        contract.uri(forgeIds[0]),
        contract.uri(forgeIds[1]),
        contract.uri(forgeIds[2]),
      ])

      expect(supply).to.have.members(forgeUris)
    })

    it("Should mint the correct tokenType for each token", async function () {
      const [contract] = await useDeploy("Equipment")

      const forgeIds = [20020125, 20020126, 20020127]

      const forgeTypes = [200203, 200204, 200205]

      await contract.batchForgeEquipment(
        [500, 500, 500],
        [`api.service/${forgeIds[0]}`, `api.service/${forgeIds[1]}`, `api.service/${forgeIds[2]}`],
        forgeIds,
        forgeTypes,
      )

      const supply = await Promise.all([
        contract.tokenType(forgeIds[0]),
        contract.tokenType(forgeIds[1]),
        contract.tokenType(forgeIds[2]),
      ])

      expect(supply.map((bn) => bn.toNumber())).to.have.members(forgeTypes)
    })
  })
})
