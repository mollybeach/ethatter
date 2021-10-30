
//import { createRequire } from "module"; // add the ability to construct the'require' method in js file
//const require = createRequire(import.meta.url); // construct the require method 
//require("hardhat/console.sol");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-solhint");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
//
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  
  networks: {
    hardhat: {
      forking:{
        url: process.env.ALCHEMY_MAINET_RPC_URL,
      },
    }
  },
};

