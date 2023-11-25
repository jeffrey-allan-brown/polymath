/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: {
    version: "0.8.20"
  },
  defaultNetwork: "ataxia",
  networks: {
    ataxia: {
      url: "https://eth-goerli.g.alchemy.com/v2/1Bk4729LeT8KK9mjIKp7PbEr-wOPlWKL",
      accounts: [`0x${process.env.SIGNING_PRIVATE_KEY}`],
      gas: 2100000000,
      gasPrice: 8000000000,
      gasLimit: 8000000000,
      blockGasLimit: 60000000
    }
  },
  paths: {
    root: "./.polychain"
  }
};
