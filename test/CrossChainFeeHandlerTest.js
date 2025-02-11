const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CrossChainFeeHandler", function () {
    it("Should handle fee payment correctly", async function () {
        const [owner, addr1] = await ethers.getSigners();
        const ERC317Token = await ethers.getContractFactory("ERC317Token");
        const token = await ERC317Token.deploy("TestERC317", "TFE");

        const FeeHandler = await ethers.getContractFactory("CrossChainFeeHandler");
        const feeHandler = await FeeHandler.deploy(token.address);

        await token._mint(owner.address, 1000000 * 10 ** 18); // Mint tokens
        await token.approve(feeHandler.address, 1000);

        await feeHandler.payFee(1000);

        const userFee = await feeHandler.getUserFees(owner.address);
        expect(userFee).to.equal(1000);
    });
});
