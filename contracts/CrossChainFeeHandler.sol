// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC317Token.sol";

contract CrossChainFeeHandler {
    ERC317Token public feeToken;
    mapping(address => uint256) public userFees;

    constructor(address _feeToken) {
        feeToken = ERC317Token(_feeToken);
    }

    // Method to pay fee in ERC317 token
    function payFee(uint256 amount) external {
        require(feeToken.transferFrom(msg.sender, address(this), amount), "Fee payment failed.");
        userFees[msg.sender] += amount;
    }

    // Method to retrieve the fees paid by the user
    function getUserFees(address user) external view returns (uint256) {
        return userFees[user];
    }
}
