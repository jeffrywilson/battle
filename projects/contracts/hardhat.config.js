require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("hardhat-gas-reporter")
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-etherscan")

const config = {
  solidity: "0.8.4",
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: "./src",
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mainnet: {
    //   url: ALCHEMY_API || "",
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    // },
    // rinkeby: {
    //   url: ALCHEMY_API_RINKEBY || "",
    //   accounts: PRIVATE_KEY_SHARED !== undefined ? [PRIVATE_KEY_SHARED] : [],
    // },
  },
  // TODO: .env
  // ETHERSCAN_API_KEY = "TPEJK46GPP495P8JHR24U89SPREW2V7IGM"
  etherscan: {
    apiKey: "TPEJK46GPP495P8JHR24U89SPREW2V7IGM",
  },
  gasReporter: {
    currency: "USD",
    coinmarketcap: "05e96ddd-13df-4a94-8fd8-044132f4a604",
    showTimeSpent: true,
    src: "src",
  },
}

module.exports = config
