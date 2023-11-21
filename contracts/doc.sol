// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringStorage {
    string private storedString;

    function storeString(string memory newString) public {
        storedString = newString;
    }

    function getString() public view returns (string memory) {
        return storedString;
    }
}
