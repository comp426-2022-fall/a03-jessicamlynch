#! /usr/bin/env node

// Adding dependencies
import { roll } from "../lib/roll.js"
import minimist from 'minimist'

// get arguments
const args = minimist(process.argv.slice(2));

// set up sides, dices, and rolls with input from user
let sides = args.sides && args.sides > 0 ? args.sides: 6;
let dices = args.dice && args.dice > 0 ? args.dice: 2;
let rolls = args.rolls && args.rolls > 0 ? args.rolls: 1;

// run roll function with input from user and leave
console.log(JSON.stringify(roll(sides, dices, rolls)));
process.exit(0);
