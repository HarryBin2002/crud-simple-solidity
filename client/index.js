const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

const abi = require('./build/CRUD.json');
// const contractAddress = '0x55eDCB6627582404AD8a941a018b7e7C8A7b4461';
const contractAddress = '0xc40Bd1b8710c5804AeA1b7f208DabD603111aF6e';



const contract = new web3.eth.Contract(abi.abi, contractAddress);


// encoded = contract.methods.Create('harrybin').encodeABI()
// var block = web3.eth.getBlock("latest");
// var gasLimit = 20000000;

// var tx = {
//     gas: gasLimit,
//     to: '0xc40Bd1b8710c5804AeA1b7f208DabD603111aF6e',
//     data: encoded
// }

// web3.eth.accounts.signTransaction(tx, 'dbf48d914c013b586ec11b9e9a2ed1a19912aaf1a312c110c15b1b576cebcc3f').then(signed => {
//     web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
// })


contract.methods.Create('binh').send({from: '0xc40Bd1b8710c5804AeA1b7f208DabD603111aF6e'});

// console.log( contract.methods.Read(1));

