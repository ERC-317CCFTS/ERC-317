// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC317Token.sol";
import "./CrossChainFeeHandler.sol";
import "./FeeTokenBridge.sol";

contract TestERC317 {
    ERC317Token public token;
    CrossChainFeeHandler public feeHandler;
    FeeTokenBridge public feeBridge;

    constructor() {
        token = new ERC317Token("TestERC317", "TFE");
        feeHandler = new CrossChainFeeHandler(address(token));
        feeBridge = new FeeTokenBridge(address(token));

        // Mint some tokens for testing
        token._mint(msg.sender, 1000000 * 10 ** 18); // Mint tokens
    }

    // Test paying the fee
    function testPayFee(uint256 amount) external {
        token.approve(address(feeHandler), amount);
        feeHandler.payFee(amount);
    }

    // Test cross-chain settlement
    function testCrossChainSettlement(address recipient, uint256 amount) external {
        feeBridge.settleCrossChainFee(recipient, amount);
    }
}
