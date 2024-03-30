(async () => {
  try {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy("0x21BBc115650C9E95B17FFEDB9C1B0b26508054b6");

    await spacebearInstance.waitForDeployment();
    console.log(
      `Deployed contract at ${spacebearInstance.target}`
    );
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
