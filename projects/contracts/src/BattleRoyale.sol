// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

/// @author Ice Cream Social Dev Team
/// @title Beast Battle Battle Royale Manager
contract BattleRoyale is AccessControl, Pausable {
  using Counters for Counters.Counter;

  struct Participant {
    address player;
    bool hasJoined;
  }

  uint16 public constant MAX_LIVES = 9;
  bytes32 public constant BATTLE_MASTER = keccak256("BATTLE_MASTER");
  bytes32 public constant COIN_HANDLER = keccak256("COIN_HANDLER");

  /// Maintain multi-gen battles
  /// Battle gen -> combatantId -> wallet/participant and current registered
  mapping(uint256 => mapping(uint256 => Participant)) private _beasts;
  /// Using inverse as counter is efficient, i.e. number < max
  mapping(uint256 => Counters.Counter) private _numberOfLives;
  mapping(uint256 => mapping(uint256 => uint256)) private _weapons;
  mapping(uint256 => mapping(uint256 => uint256)) private _armor;
  mapping(uint256 => uint256[]) private _beastIndex;

  Counters.Counter private _currentBattle;

  address payable public owner;
  uint256 public MAX_BEASTS = 456;
  /// Currently set to .00000000001 ETH
  uint256 public ENROLLMENT_FEE = 1 * 10**8;

  event BeastJoined(uint256 beastId, address player);
  /// @dev this might be better suited for isolated, specific actions
  event BattleClosed();
  event BattleCompleted(uint256 battleNumber);
  event EnrollmentClosed(uint256 battleGen);
  event EnrollmentOpened(uint256 battleGen);
  event WeaponEquipped(uint256 beastId, uint256 weaponId);
  event ArmorEquipped(uint256 beastId, uint256 armorId);
  event StartBattle(uint256 battleNumber);
  event FirstPlace(uint256 battle, uint256 beastId, address firstPlace);
  event SecondPlace(uint256 battle, uint256 beastId, address secondPlace);
  event ThirdPlace(uint256 battle, uint256 beastId, address thirdPlace);

  constructor() {
    owner = payable(msg.sender);

    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(BATTLE_MASTER, msg.sender);
    _grantRole(COIN_HANDLER, msg.sender);

    _currentBattle.increment();
  }

  modifier isSignedUp(uint256 beastId) {
    require(hasJoined(beastId, _currentBattle.current()), "Beast is not signed up");
    _;
  }

  modifier isNotSignedUp(uint256 beastId) {
    require(!hasJoined(beastId, _currentBattle.current()), "Beast is already signed up");
    _;
  }

  modifier hasLives(uint256 beastId) {
    require(_numberOfLives[beastId].current() < MAX_LIVES, "Beast can no longer compete");
    _;
  }

  /// Manage payments
  function withdraw() public onlyRole(COIN_HANDLER) {
    uint256 amount = address(this).balance;

    (bool success, ) = owner.call{value: amount}("");

    require(success, "Failed to send Ether");
  }

  /// Transfer Funds
  /// @dev called internally at completion of battle
  /// @param _to payable address to send amout to
  /// @param _amount amount to be sent as payment
  function _payout(address payable _to, uint256 _amount) private onlyRole(COIN_HANDLER) {
    (bool success, ) = _to.call{value: _amount}("");

    require(success, "Failed to send Ether");
  }

  /// Manage Battle
  function currentBattle() public view returns (uint256 battle) {
    return _currentBattle.current();
  }

  function setMaxBeasts(uint256 maxBeasts) public onlyRole(BATTLE_MASTER) {
    MAX_BEASTS = maxBeasts;
  }

  function setEnrollmentFee(uint256 enrollmentFee) public onlyRole(BATTLE_MASTER) {
    ENROLLMENT_FEE = enrollmentFee;
  }

  /// Manage battle enrollment
  /// @notice pause: close enrollment for current battle
  function closeEnrollment() public onlyRole(BATTLE_MASTER) {
    _pause();

    emit EnrollmentClosed(_currentBattle.current());
  }

  /// @notice unpause: open enrollment for current battle
  function openEnrollment() public onlyRole(BATTLE_MASTER) {
    _unpause();

    emit EnrollmentOpened(_currentBattle.current());
  }

  /// Close current battle
  /// @notice closes enrollment, increments battle gen, emits closing event
  /// @dev this might be better suited for isolated, specific actions
  function closeBattle() public onlyRole(BATTLE_MASTER) {
    closeEnrollment();
    _currentBattle.increment();

    emit BattleClosed();
  }

  function hasJoined(uint256 beastId, uint256 battleId) public view returns (bool hasJoinedBattle) {
    return _beasts[battleId][beastId].hasJoined;
  }

  function joinBattle(uint256 beastId)
    public
    payable
    whenNotPaused
    hasLives(beastId)
    isNotSignedUp(beastId)
  {
    require(
      _beastIndex[_currentBattle.current()].length < MAX_BEASTS,
      "Sign up threshold has been met"
    );

    require(msg.value > ENROLLMENT_FEE, "Must cover cost of entry");

    _beastIndex[_currentBattle.current()].push(beastId);

    _beasts[_currentBattle.current()][beastId].player = msg.sender;
    _beasts[_currentBattle.current()][beastId].hasJoined = true;

    emit BeastJoined(beastId, msg.sender);
  }

  function getBeastIds() public view returns (uint256[] memory beasts) {
    return _beastIndex[_currentBattle.current()];
  }

  function getPlayer(uint256 beastId) public view isSignedUp(beastId) returns (address player) {
    return _beasts[_currentBattle.current()][beastId].player;
  }

  function beastLives(uint256 beastId) public view returns (uint256) {
    return MAX_LIVES - _numberOfLives[beastId].current();
  }

  function equipWeapon(uint256 beastId, uint256 weaponId) public isSignedUp(beastId) {
    _weapons[_currentBattle.current()][beastId] = weaponId;

    emit WeaponEquipped(beastId, weaponId);
  }

  function getEquippedWeapon(uint256 beastId)
    public
    view
    isSignedUp(beastId)
    returns (uint256 weaponId)
  {
    require(_weapons[_currentBattle.current()][beastId] > 0, "No equipped weapon");

    return _weapons[_currentBattle.current()][beastId];
  }

  function equipArmor(uint256 beastId, uint256 armorId) public isSignedUp(beastId) {
    _armor[_currentBattle.current()][beastId] = armorId;

    emit ArmorEquipped(beastId, armorId);
  }

  function getEquippedArmor(uint256 beastId)
    public
    view
    isSignedUp(beastId)
    returns (uint256 armorId)
  {
    require(_armor[_currentBattle.current()][beastId] > 0, "No equipped armor");

    return _armor[_currentBattle.current()][beastId];
  }

  /// Running a Battle
  function startBattle() public onlyRole(BATTLE_MASTER) returns (uint256 battleNumber) {
    emit StartBattle(_currentBattle.current());

    if (!paused()) {
      closeEnrollment();
    }

    return _currentBattle.current();
  }

  function completeBattle(
    uint256 firstPlaceBeast,
    uint256 secondPlaceBeast,
    uint256 thirdPlaceBeast
  )
    public
    onlyRole(BATTLE_MASTER)
    isSignedUp(firstPlaceBeast)
    isSignedUp(secondPlaceBeast)
    isSignedUp(thirdPlaceBeast)
    returns (uint256 battleNumber)
  {
    emit BattleCompleted(_currentBattle.current());

    battleNumber = _currentBattle.current();

    emit FirstPlace(battleNumber, firstPlaceBeast, _beasts[battleNumber][firstPlaceBeast].player);

    emit SecondPlace(
      battleNumber,
      secondPlaceBeast,
      _beasts[battleNumber][secondPlaceBeast].player
    );

    emit ThirdPlace(battleNumber, thirdPlaceBeast, _beasts[battleNumber][thirdPlaceBeast].player);

    // Payout to winner
    // _payout(_beasts[battleNumber][firstPlaceBeast].player, winnings)

    // Payout to wallet
    // _payout(owner, houseFees)

    return battleNumber;
  }

  /// @dev This iteration will not work within gas limit
  function markDefeated(uint256[] memory beastIds) public {
    for (uint256 i = 0; i < beastIds.length; i++) {
      _numberOfLives[beastIds[i]].increment();
    }
  }
}
