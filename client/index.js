const Web3 = require('web3');

const CRUD = require('./build/CRUD.json');

const init = async () => {
    const web3 = new Web3 ('http://127.0.0.1:9545/');

    const contract = await new web3.eth.Contract(CRUD.abi, '0x7c04e1D5a89cDa9B19b0c4ac5ddA6a6F8B1457a4');

    const create  = await contract.methods.Create('harrybin').send({from: '0x6e34a8f6afd40890d1830872e1eb12330d07261a', gas: '1000000'});

    // const balance = await contract.methods.totalPlayer().call();
    // console.log(balance);

    const name1 = await contract.methods.getNameFromId(1).call();
    console.log(name1);
    
    const deletePlayer = await contract.methods.Delete(2).send({from: '0x6e34a8f6afd40890d1830872e1eb12330d07261a', gas: '1000000'});
    const balance = await contract.methods.totalPlayer().call();
    console.log(balance);
    const show = await contract.methods.showPlayer().call();
    console.log(show);
}



init();