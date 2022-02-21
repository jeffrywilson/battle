// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

/* Token Types
 * 20: Equipment
 * Token Id Format:
 * TOKEN_TYPE (20) EQUIPMENT_TYPE (01 - 02 - 03 - 04) EQUIPMENT_SLOT (01 - 02 - 03) INCREMENT
 * Types:
 * 01: Weapon
 *     Slots
 *     01: One-Handed
 *     02: Two-Handed
 *     03: Off-Hand
 * 02: Armor
 *     Slots
 *     01: Body
 *     02: Head
 *     03: Hands
 *     04: Feet
 * 03: Consumable
 *     Single Slot - 99
 * 04: Companion (if not own token)
 *
 * Body Armor tokenId 25 - 20020125
 */

/// @author Ice Cream Social Dev Team
/// @title Beast Battle Equipment Token Manager
contract Equipment is
    ERC1155,
    AccessControl,
    Pausable,
    ERC1155Burnable,
    ERC1155Supply
{
    using Counters for Counters.Counter;

    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => uint256) private _tokenTypes;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant SMITH_ROLE = keccak256("SMITH_ROLE");
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");

    event EquipmentForged(uint256 tokenId);
    event BatchEquipmentForged(uint256[] tokenIds);

    constructor() ERC1155("http://localhost:4200/tokens/{id}") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(SMITH_ROLE, msg.sender);
        _grantRole(URI_SETTER_ROLE, msg.sender);
    }

    /// Forge a single type of equipment, send to Forge
    /// @param forgeSupply the number of tokens to mint
    /// @param forgeURI the URI for specific token
    /// @param forgeId the aggregated token type
    /// @param forgeType the aggregated token type
    function forgeEquipment(
        uint256 forgeSupply,
        string memory forgeURI,
        uint256 forgeId,
        uint256 forgeType
    ) external onlyRole(SMITH_ROLE) {
        _mint(msg.sender, forgeId, forgeSupply, "");

        _tokenURIs[forgeId] = forgeURI;
        _tokenTypes[forgeId] = forgeType;

        emit EquipmentForged(forgeId);
    }

    /// Forge multiple types of equipment, send to Forge
    /// @dev lists must be in order for each param
    /// @param forgeSupply list of the number of tokens to mint
    /// @param forgeURIs list of the URI for each token
    /// @param forgeIds list of the token ids
    /// @param forgeTypes list of the aggregated token types
    function batchForgeEquipment(
        uint256[] memory forgeSupply,
        string[] memory forgeURIs,
        uint256[] memory forgeIds,
        uint256[] memory forgeTypes
    ) public onlyRole(SMITH_ROLE) {
        for (uint256 i = 0; i < forgeIds.length; i++) {
            _tokenURIs[forgeIds[i]] = forgeURIs[i];
            _tokenTypes[forgeIds[i]] = forgeTypes[i];
        }

        _mintBatch(msg.sender, forgeIds, forgeSupply, "");

        emit BatchEquipmentForged(forgeIds);
    }

    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return _tokenURIs[tokenId];
    }

    function setTokenURI(uint256 tokenId, string memory newuri)
        public
        onlyRole(URI_SETTER_ROLE)
    {
        _tokenURIs[tokenId] = newuri;
    }

    /// Get token type for specific token
    /// @param tokenId the token id
    /// @return the aggregated type for the token
    function tokenType(uint256 tokenId) public view virtual returns (uint256) {
        return _tokenTypes[tokenId];
    }

    // OpenZeppelin
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
    ) public onlyRole(SMITH_ROLE) {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyRole(SMITH_ROLE) {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) whenNotPaused {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
