// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract Beasts is ERC721, ERC721URIStorage, Pausable, AccessControl, ERC721Burnable {
  using Counters for Counters.Counter;

  struct BeastStats {
    uint256 stats;
    uint256 baseTokenId;
  }

  bytes32 public constant GAME_MASTER = keccak256("GAME_MASTER");
  bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  uint16 public maxFamilyMint = 1000;

  Counters.Counter private _tokenIdCounter;

  mapping(uint256 => BeastStats) private _beasts;
  mapping(uint256 => Counters.Counter) private _beastFamilyMinted;

  event BeastRecruited(uint256 tokenId, address _owner);
  event AttributeMod(uint256 _tokenId, uint256 _trophyId, address _owner);
  event EarnTrophy(uint256 _tokenId, uint256 _trophyId, address _owner);
  event EarnAchievement(uint256 _tokenId, uint256 _trophyId, address _owner);
  event CampaignStripes(uint256 _tokenId, uint256 _trophyId, address _owner);

  constructor() ERC721("Beasts", "BBB") {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(GAME_MASTER, msg.sender);
    _grantRole(PAUSER_ROLE, msg.sender);
    _grantRole(MINTER_ROLE, msg.sender);

    _tokenIdCounter.increment();
  }

  modifier beastFamilyAvailable(uint256 familyId) {
    require(_beastFamilyMinted[familyId].current() < maxFamilyMint, "Beast Family not available");
    _;
  }

  function recruitBeast(
    address to,
    string memory uri,
    uint256 stats,
    uint256 baseToken,
    uint256 familyId
  ) public onlyRole(MINTER_ROLE) beastFamilyAvailable(familyId) {
    uint256 tokenId = _tokenIdCounter.current();

    _safeMint(to, tokenId);
    _setTokenURI(tokenId, uri);

    _beasts[tokenId].baseTokenId = baseToken;

    _beasts[tokenId].stats = stats;

    _beastFamilyMinted[familyId].increment();

    emit BeastRecruited(tokenId, to);

    _tokenIdCounter.increment();
  }

  function baseTokenId(uint256 tokenId) public view returns (uint256) {
    return _beasts[tokenId].baseTokenId;
  }

  function beastStats(uint256 tokenId) public view returns (uint256) {
    return _beasts[tokenId].stats;
  }

  function setMaxFamilyMint(uint16 maxMint) public onlyRole(GAME_MASTER) {
    maxFamilyMint = maxMint;
  }

  function numberOfFamilyRecruited(uint256 familyId) public view returns (uint256) {
    return _beastFamilyMinted[familyId].current();
  }

  // Open Zeppelin
  function pause() public onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal override whenNotPaused {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  // The following functions are overrides required by Solidity.
  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, AccessControl)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
