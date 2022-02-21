const chai = require("chai")
const { solidity } = require("ethereum-waffle")
const { parseUnits } = require("ethers/lib/utils")

const useDeploy = require("./useDeploy.util")

const { expect } = chai

chai.use(solidity)

describe("Battle Royale!", function () {
  const feeValue = { value: parseUnits("1", 9) }

  // TODO: AC Needs met
  it("Should maintain a data hash on BattleCompleted event", async function () {
    // Generate a merkle hash and point at result uri
  })

  it("Should emit event listing eliminated Beasts in data", async function () {
    // Emit events for losses and wins
  })

  it("Should pay the winner(s) a specific amount", async function () {
    // Pay the winner (payout function, uses combatant id, transfers X% payout from main wallet)
  })

  it("Should pay the owner a specific amount", async function () {
    // Pay the winner (payout function, uses combatant id, transfers X% payout from main wallet)
    // Pay the owner wallet for fees
  })

  it("Should allow payment sent to stakeholders", async function () {
    // Reward Stakeholders
  })

  describe("Manage Funds", function () {
    it("Should allow withdrawal of funds by the owner", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const initialBalance = await accounts[0].getBalance()

      for (let i = 1; i < 6; i++) {
        await contract.connect(accounts[i]).joinBattle(i, { value: parseUnits("1", 18) })
      }

      await contract.withdraw()

      const updatedBalance = await accounts[0].getBalance()

      expect(updatedBalance.gt(initialBalance)).to.be.true
    })

    it("Should revert withdrawal if role is not present", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const notOwnerContract = await contract.connect(accounts[1])

      await expect(notOwnerContract.withdraw()).to.be.reverted
    })
  })

  describe("Manage Battles", function () {
    it("Should allow contract to be paused to suspend sign-ups", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await contract.closeEnrollment()

      await expect(contract.joinBattle(123, feeValue)).to.be.revertedWith("Pausable: paused")
    })

    it("Should emit an EnrollmentClosed event", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await expect(contract.closeEnrollment()).to.emit(contract, "EnrollmentClosed").withArgs(1)
    })

    it("Should allow contract to be un-paused to resume sign-ups", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      await contract.closeEnrollment()

      await expect(contract.joinBattle(123, feeValue)).to.be.revertedWith("Pausable: paused")

      await contract.openEnrollment()

      expect(await contract.connect(accounts[1]).joinBattle(123, feeValue))
        .to.emit(contract, "BeastJoined")
        .withArgs(123, accounts[1].address)
    })

    it("Should emit an EnrollmentOpened event", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await contract.closeEnrollment()

      await expect(contract.openEnrollment()).to.emit(contract, "EnrollmentOpened").withArgs(1)
    })

    it("Should limit pausing/unpausing to associated role", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const notOwnerContract = await contract.connect(accounts[1])

      await expect(notOwnerContract.closeEnrollment()).to.be.reverted
    })

    it("Should allow a battle to be closed", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await expect(contract.closeBattle()).to.emit(contract, "BattleClosed")

      const paused = await contract.paused()

      expect(paused).to.equal(true)

      const battleGen = await contract.currentBattle()

      expect(battleGen.toNumber()).to.equal(2)
    })

    it("Should limit closing a battle to associated role", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const notOwnerContract = await contract.connect(accounts[1])

      await expect(notOwnerContract.closeBattle()).to.be.reverted
    })
  })

  describe("Signing Up", function () {
    it("Should allow a player to join the battle", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      expect(await contract.connect(accounts[1]).joinBattle(123, feeValue))
        .to.emit(contract, "BeastJoined")
        .withArgs(123, accounts[1].address)

      const beastIds = await contract.getBeastIds()

      expect(beastIds.length).to.equal(1)
    })

    it("Should reject players joining beyond the preset limit", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      await contract.setMaxBeasts(3)

      await contract.connect(accounts[1]).joinBattle(1, feeValue)
      await contract.connect(accounts[2]).joinBattle(2, feeValue)
      await contract.connect(accounts[3]).joinBattle(3, feeValue)

      await expect(contract.joinBattle(4, feeValue)).to.be.revertedWith(
        "Sign up threshold has been met",
      )
    })

    it("Should make player wallet id available", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const beastId = 123

      await contract.connect(accounts[1]).joinBattle(beastId, feeValue)

      const address = await contract.getPlayer(beastId)

      expect(address).to.equal(accounts[1].address)
    })

    it("Should revert player wallet lookup if not signed up", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      await contract.connect(accounts[1]).joinBattle(123, feeValue)

      await expect(contract.getPlayer(456)).to.be.revertedWith("Beast is not signed up")
    })

    it("Should track Beasts", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      for (let i = 1; i <= 5; i++) {
        await contract.connect(accounts[i]).joinBattle(i, feeValue)
      }

      const beastIds = await contract.getBeastIds()

      expect(beastIds.map((bn) => bn.toNumber())).to.have.all.members([1, 2, 3, 4, 5])
    })

    it("Should emit a BeastJoined event", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      expect(await contract.connect(accounts[1]).joinBattle(123, feeValue))
        .to.emit(contract, "BeastJoined")
        .withArgs(123, accounts[1].address)
    })

    it("Should receive payment from player joining", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const players = 5

      for (let i = 0; i < players; i++) {
        await contract.connect(accounts[1]).joinBattle(i, feeValue)
      }

      const value = await contract.provider.getBalance(contract.address)

      expect(value.toNumber()).to.equal(players * feeValue.value.toNumber())
    })

    it("Should revert transaction if value is less than required", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await expect(contract.joinBattle(10)).to.be.revertedWith("Must cover cost of entry")
    })

    it("Should not allow a Beast with no lives to sign up", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      for (let i = 0; i < 9; i++) await contract.markDefeated([123])

      await expect(contract.joinBattle(123)).to.be.revertedWith("Beast can no longer compete")
    })

    it("Should allow a Beast 9 lives", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      for (let i = 0; i < 5; i++) await contract.markDefeated([123])

      expect(await contract.connect(accounts[1]).joinBattle(123, feeValue))
        .to.emit(contract, "BeastJoined")
        .withArgs(123, accounts[1].address)

      for (let i = 0; i < 9; i++) await contract.markDefeated([456])

      await expect(contract.joinBattle(456)).to.be.revertedWith("Beast can no longer compete")
    })
  })

  describe("Equipment", function () {
    describe("Weapon", function () {
      it("Should allow a player to equip a Weapon", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123

        await contract.joinBattle(beastId, feeValue)

        expect(await contract.equipWeapon(beastId, 5)).not.to.throw
      })

      it("Should revert transaction if Beast is not signed up", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        await expect(contract.equipWeapon(123, 5)).to.be.revertedWith("Beast is not signed up")
      })

      it("Should emit a WeaponEquipped event", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const weaponId = 20

        await contract.joinBattle(beastId, feeValue)

        expect(await contract.equipWeapon(beastId, weaponId))
          .to.emit(contract, "WeaponEquipped")
          .withArgs(beastId, weaponId)
      })

      it("Should track Weapon Id by Beast tokenId", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const weaponId = 20

        await contract.joinBattle(beastId, feeValue)

        await contract.equipWeapon(beastId, weaponId)

        const weapon = await contract.getEquippedWeapon(beastId)

        expect(weapon.toNumber()).to.equal(weaponId)
      })

      it("Should only allow beast to carry one weapon", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const firstWeapon = 10

        await contract.joinBattle(beastId, feeValue)

        await contract.equipWeapon(beastId, firstWeapon)

        const first = await contract.getEquippedWeapon(beastId)

        expect(first.toNumber()).to.equal(firstWeapon)

        const secondWeapon = 30

        await contract.equipWeapon(beastId, secondWeapon)

        const second = await contract.getEquippedWeapon(beastId)

        expect(second.toNumber()).to.equal(secondWeapon)
      })
    })

    describe("Armor", function () {
      it("Should allow a player to equip Armor", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123

        await contract.joinBattle(beastId, feeValue)

        expect(await contract.equipArmor(123, 5)).not.to.throw
      })

      it("Should revert transaction if Beast is not signed up", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        await expect(contract.equipArmor(123, 5)).to.be.revertedWith("Beast is not signed up")
      })

      it("Should emit a ArmorEquipped event", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const armorId = 20

        await contract.joinBattle(beastId, feeValue)

        expect(await contract.equipArmor(beastId, armorId))
          .to.emit(contract, "ArmorEquipped")
          .withArgs(beastId, armorId)
      })

      it("Should track armor id by beast id", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const armorId = 20

        await contract.joinBattle(beastId, feeValue)

        await contract.equipArmor(beastId, armorId)

        const armor = await contract.getEquippedArmor(beastId)

        expect(armor.toNumber()).to.equal(armorId)
      })

      it("Should only allow beast to wear one armor", async function () {
        const [contract] = await useDeploy("BattleRoyale")

        const beastId = 123
        const firstArmor = 20

        await contract.joinBattle(beastId, feeValue)

        await contract.equipArmor(beastId, firstArmor)

        const first = await contract.getEquippedArmor(beastId)

        expect(first.toNumber()).to.equal(firstArmor)

        const secondArmor = 30

        await contract.equipArmor(beastId, secondArmor)

        const second = await contract.getEquippedArmor(beastId)

        expect(second.toNumber()).to.equal(secondArmor)
      })
    })
  })

  describe("Starting a Battle", function () {
    it("Should emit a Battle Started event with battle number", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      expect(await contract.startBattle())
        .to.emit(contract, "StartBattle")
        .withArgs(1)
    })

    it("Should close enrollment if open", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      expect(await contract.paused()).to.equal(false)

      expect(await contract.startBattle())
        .to.emit(contract, "EnrollmentClosed")
        .withArgs(1)

      const paused = await contract.paused()

      expect(paused).to.equal(true)
    })

    it("Should revert transaction without associated role", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      const notOwnerContract = await contract.connect(accounts[1])

      await expect(notOwnerContract.startBattle()).to.be.reverted
    })
  })

  describe("Complete Battle", function () {
    it("Should emit a BattleCompleted event with battle number", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await contract.joinBattle(1, feeValue)
      await contract.joinBattle(2, feeValue)
      await contract.joinBattle(3, feeValue)

      expect(await contract.completeBattle(1, 2, 3))
        .to.emit(contract, "BattleCompleted")
        .withArgs(1)
    })

    it("Should emit events for first, second, third with ids and winner address", async function () {
      const [contract, accounts] = await useDeploy("BattleRoyale")

      await contract.joinBattle(1, feeValue)
      await contract.joinBattle(2, feeValue)
      await contract.joinBattle(3, feeValue)

      expect(await contract.completeBattle(1, 2, 3))
        .to.emit(contract, "FirstPlace")
        .withArgs(1, 1, accounts[0].address)

      expect(await contract.completeBattle(1, 2, 3))
        .to.emit(contract, "SecondPlace")
        .withArgs(1, 2, accounts[0].address)

      expect(await contract.completeBattle(1, 2, 3))
        .to.emit(contract, "ThirdPlace")
        .withArgs(1, 3, accounts[0].address)
    })

    it("Should increment lives of defeated Beasts", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      await contract.markDefeated([123])

      const lives = await contract.beastLives(123)

      await expect(lives.toNumber()).to.equal(8)
    })

    it("Should not fail upon erroneous numeric BeastId", async function () {
      const [contract] = await useDeploy("BattleRoyale")

      const lives = await contract.beastLives(909090909)

      await expect(lives.toNumber()).to.equal(9)
    })

    it.skip("Should not exceed gas limit", async function () {
      // Cannot parse large number of items within limit
      const [contract] = await useDeploy("BattleRoyale")

      const beasts = []

      for (let i = 0; i < 4567; i++) beasts.push(i)

      await contract.markDefeated(beasts)

      const lives = await contract.beastLives(4500)

      await expect(lives.toNumber()).to.equal(9)
    })
  })
})
