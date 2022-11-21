const path = require('path');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const bscProvider = new HDWalletProvider({
  privateKeys: ['dbf48d914c013b586ec11b9e9a2ed1a19912aaf1a312c110c15b1b576cebcc3f'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545'
});

module.exports = {
  
  contracts_build_directory: path.join(__dirname, 'client/build'),


  networks: {
    bscTestnet: {
      provider: () => bscProvider,
      network_id: "97",
      gas: 20000000
    }
  },
  
  compilers: {
    solc: {
      version: "^0.8.0",
    }
  },

};
