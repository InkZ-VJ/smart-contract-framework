const { expect } = require("chai");
const hre = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Spacebear", function () {
  async function deploySpacebearAndMintTokenFixture() {
    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const [owner, otherAccount] = await ethers.getSigners();
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy(owner.address);

    await spacebearInstance.safeMint(otherAccount.address);
    return { spacebearInstance };
  }

  it("be able to mint a token", async function () {
    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const { spacebearInstance } = await loadFixture(
      deploySpacebearAndMintTokenFixture,
    
    );

    const [owner, otherAccount] = await ethers.getSigners();
    expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
  });

  it("fails to transfer tokens from the wrong address", async function () {
    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const { spacebearInstance } = await loadFixture(
      deploySpacebearAndMintTokenFixture
    );

    const [owner, nftOwnerAccount, notNftOwnerAccount] = await ethers.getSigners();
    expect(await spacebearInstance.ownerOf(0)).to.equal(
      nftOwnerAccount.address
    );
    await expect(
      spacebearInstance
        .connect(notNftOwnerAccount)
        .transferFrom(nftOwnerAccount.address, notNftOwnerAccount.address, 0)
    ).to.be.revertedWith("ERC721: caller is not token owner nor approved");
  });
});
