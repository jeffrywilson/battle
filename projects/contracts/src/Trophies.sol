// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/* Token Types
 * 30: Trophies
 *
 * Token Id Format:
 * TOKEN_TYPE (30) FACTION_ID (01, 02, 03) TROPHY_ID
 *
 * Factions
 *   01: Calad
 *   02: Esher
 *   03: Valorin
 *
 * Trophy Id for Calad Trophy id 25 - 300125
 */

/// @author Ice Cream Social Dev Team
/// @title Beast Battle Trophy Token Manager
contract Trophies is
  Initializable,
  ERC1155Upgradeable,
  AccessControlUpgradeable,
  PausableUpgradeable,
  ERC1155BurnableUpgradeable,
  ERC1155SupplyUpgradeable
{
  address private _shopOwner;

  bytes32 public constant GOLD_SMITH = keccak256("GOLD_SMITH");
  bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
  bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() initializer {}

  function initialize() public initializer {
    __ERC1155_init("");
    __AccessControl_init();
    __Pausable_init();
    __ERC1155Burnable_init();
    __ERC1155Supply_init();

    _shopOwner = msg.sender;

    _grantRole(GOLD_SMITH, msg.sender);
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(URI_SETTER_ROLE, msg.sender);
    _grantRole(PAUSER_ROLE, msg.sender);
  }

  function isGoldSmith(address userAddr) public view returns (bool) {
    return hasRole(GOLD_SMITH, userAddr);
  }

  function getShopOwner() public view returns (address) {
    return _shopOwner;
  }

  function craftTrophy(uint256 trophyId, uint256 amount) public onlyRole(GOLD_SMITH) {
    _mint(_shopOwner, trophyId, amount, "");
  }

  function craftTrophySet(uint256[] memory trophyIds, uint256[] memory amounts)
    public
    onlyRole(GOLD_SMITH)
  {
    _mintBatch(_shopOwner, trophyIds, amounts, "");
  }

  // OpenZeppelin Methods
  function setURI(string memory newuri) public onlyRole(URI_SETTER_ROLE) {
    _setURI(newuri);
  }

  function pause() public onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  function mint(
    address account,
    uint256 id,
    uint256 amount,
    bytes memory data
  ) public onlyRole(GOLD_SMITH) {
    _mint(account, id, amount, data);
  }

  function mintBatch(
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) public onlyRole(GOLD_SMITH) {
    _mintBatch(to, ids, amounts, data);
  }

  function _beforeTokenTransfer(
    address operator,
    address from,
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) internal override(ERC1155Upgradeable, ERC1155SupplyUpgradeable) whenNotPaused {
    super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
  }

  // The following functions are overrides required by Solidity.
  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC1155Upgradeable, AccessControlUpgradeable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
