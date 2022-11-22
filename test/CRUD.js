const CRUD = artifacts.require('CRUD');


contract('CRUD', () => {
    let instance;
    before ('Should setup the contract instance', async () => {
        instance = await CRUD.deployed();
    });

    it ('Should deploy Smart Contract', async () => {
        assert(instance.address !== '');
    });

    it ('Should adding player to array', async () => {
        const balances = await instance.totalPlayer();
        assert(balances == 0);

        await instance.Create('harrybin1');
        const balances2 = await instance.totalPlayer();
        assert(balances2 == 1);
    });

    it ('Should return name from id', async () => {
        await instance.Create('harrybin2');
        const name = await instance.getNameFromId(2);
        assert(name == 'harrybin2');
    });

    it ('Should return object player', async () => {
        const p = await instance.getObjectPlayer(1);
        assert(p.id == 1, p.name == 'harrybin1'); 
        const balances = await instance.totalPlayer();
        assert(balances == 2);
    });

    it ('Should change new name', async () => {
        await instance.Update(1, 'newharrybin1');
        const name = await instance.getNameFromId(1);
        assert(name == 'newharrybin1');
    });

    it ('Should delete player', async () => {
        await instance.Delete(2);
        const balances = await instance.totalPlayer();
        assert(balances == 1);
        const name = await instance.getNameFromId(2);
        assert(name != 'harrybin2');
    });

    it ('Should show infor player', async () => {
        const show = await instance.showPlayer();
        assert(show == 'ID: 1 Name: newharrybin1 - ');
    });

});