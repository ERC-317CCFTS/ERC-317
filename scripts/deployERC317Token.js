const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const ERC317Token = await ethers.getContractFactory("ERC317Token");
    const token = await ERC317Token.deploy("TestERC317", "TFE");
    console.log("ERC317 Token deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
