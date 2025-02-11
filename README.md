# ERC-317
Cross-Chain Fee Settlement Token
# ERC-317 Cross-Chain Fee Settlement Token (CCSFT)

This project is an implementation of **ERC-317**, a token standard designed to facilitate **cross-chain fee settlement** in decentralized finance (DeFi) platforms.

## Project Structure

- **Contracts**:
  - `ERC317Token.sol`: ERC-20 compliant token that serves as the fee token.
  - `CrossChainFeeHandler.sol`: Manages payment of fees in ERC-317 tokens.
  - `FeeTokenBridge.sol`: Handles cross-chain settlement of fees.
  - `TestERC317.sol`: Test contract for deploying and testing the entire system.
  
- **Scripts**:
  - `deployERC317Token.js`: Deploys the ERC-317 token contract.
  - `deployFeeHandler.js`: Deploys the CrossChainFeeHandler contract.
  - `bridgeDeployment.js`: Deploys the FeeTokenBridge contract.
  - `testDeployment.js`: Test deployment script.
  
- **Tests**:
  - `ERC317TokenTest.js`: Test suite for ERC-317 token.
  - `CrossChainFeeHandlerTest.js`: Test suite for fee handling functionality.
  - `FeeTokenBridgeTest.js`: Test suite for the cross-chain bridge functionality.
  - `GeneralTest.js`: General tests for the system.

## How to Use

1. Install dependencies:
   ```bash
   npm install
2. Deploy the contracts:

Run the deployERC317Token.js script to deploy the ERC-317 token.
Run the deployFeeHandler.js and bridgeDeployment.js scripts for deploying the handler and bridge contracts.

3. Run Test
  -- npx hardhat test
