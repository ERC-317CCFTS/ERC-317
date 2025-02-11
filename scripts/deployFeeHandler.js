const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TokenAddress = "your_token_address";  // Address of the deployed ERC317Token
    const FeeHandler = await ethers.getContractFactory("CrossChainFeeHandler");
    const feeHandler = await FeeHandler.deploy(TokenAddress);
    console.log("FeeHandler deployed to:", feeHandler.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
