/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: {
    version: "0.8.20"
  },
  defaultNetwork: "ataxia",
  networks: {
    ataxia: {
      url: "http://127.0.0.1:7545"
    }
  },
  paths: {
    root: "./.polychain"
  }
};
