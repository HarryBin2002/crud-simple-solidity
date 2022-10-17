// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";

contract CRUD {
    // Create struct Player
    struct Player {
        string name;
        uint256 id;
    }

    // Players array
    Player[] private players;
    uint256 private nextId = 1;
    uint256 private balances = 0;

    // Mapping
    mapping (uint256 => string) private idToName;

    // CRUD function

    // Create function
    function Create(string memory name) public {
        players.push(Player(name, nextId));
        idToName[nextId] = name;
        balances++;
        nextId++;
    }

    // Read function
    function Read(uint256 id) view public returns (uint256 PlayerId, string memory PlayerName) {
        for (uint256 index = 0; index < players.length; index++) {
            if (players[index].id == id) {
                return (players[index].id, players[index].name);
            }
        }
    }

    // Update function
    function Update(uint256 id, string memory newName) public {
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i].id == id) {
                players[i].name = newName;
            }
        }
        idToName[id] = newName;
    }

    // Delete function
    function Delete(uint256 id) public {
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i].id == id) {
                delete players[i];
                balances--;
            }
        }
    }

    // get balances
    function totalPlayer() view public returns (uint256) {
        return balances;
    } 

    // show players
    function showPlayer() view public returns (string memory ListPlayer) {
        string memory result = "";
        
        for (uint256 i = 0; i < players.length; i++) {
            result = string(
                abi.encodePacked(
                    result,
                    "ID: ", Strings.toString(players[i].id),
                    " "
                    "Name: ", players[i].name,
                    " - "
                )
            );
        } 

        return result;
    }
}