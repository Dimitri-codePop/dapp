import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    }
  }
};

