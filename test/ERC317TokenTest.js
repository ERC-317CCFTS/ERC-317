const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC317Token", function () {
    it("Should mint the correct amount of tokens", async function () {
        const [owner] = await ethers.getSigners();
        const ERC317Token = await ethers.getContractFactory("ERC317Token");
        const token = await ERC317Token.deploy("TestERC317", "TFE");

        const balance = await token.balanceOf(owner.address);
        expect(balance).to.equal(1000000 * 10 ** 18);
    });
});
