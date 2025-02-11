const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TokenAddress = "your_token_address";  // Address of the deployed ERC317Token
    const FeeBridge = await ethers.getContractFactory("FeeTokenBridge");
    const feeBridge = await FeeBridge.deploy(TokenAddress);
    console.log("FeeBridge deployed to:", feeBridge.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
