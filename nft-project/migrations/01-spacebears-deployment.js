const Spacebears = artifacts.require("Spacebear");

module.exports = function(deployer, network,accounts) {

    console.log("Networks:", network);
    console.log("Accounts:", accounts);
    deployer.deploy(Spacebears,accounts[0]);
}
