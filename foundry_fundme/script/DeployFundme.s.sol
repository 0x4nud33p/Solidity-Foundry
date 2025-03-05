// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import { Script } from "../lib/forge-std/src/Script.sol";
import { FundMe } from "../src/Fundme.sol";

contract DeployFundme is Script {

    function run() external{
        vm.startBroadCast();
        new Fundme();
        vm.stopBroadCast();
    }
}
