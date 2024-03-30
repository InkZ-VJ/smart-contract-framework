pragma solidity ^0.8;

contract Owner {
    address owner;
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "You are not the owner, aborting!");
        _; 
    }
}
