#!/usr/bin/env node

// Adding dependencies
import { roll } from "/lib/roll.js"
import minimist from 'minimist'

// get arguments
const args = minimist(process.argv.slice(2));
