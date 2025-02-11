// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC317Token is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    // Optionally, you can add custom functionality if needed
}
